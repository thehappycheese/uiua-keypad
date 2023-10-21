import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {

    let panel: vscode.WebviewPanel | undefined = undefined;
    let active_text_editor:vscode.TextEditor|undefined = vscode.window.activeTextEditor;

    // TODO: I don't know how to do settings properly yet,
    //       So i just added a tickbox to the UI and it will default to true
    //       every time it is activated for now.

    let setting_move_cursor = false;

    // track active text editor
    // TODO: do we need to track notebook editors separately?
    //       I wont bother for now since there is no kernel yet.
    vscode.window.onDidChangeActiveTextEditor(new_active_editor=>{
        if(new_active_editor){
            active_text_editor = new_active_editor;
        }
        console.log(new_active_editor)
        if(new_active_editor){
            console.log(new_active_editor.document.fileName)
        }
    });

    context.subscriptions.push(
        vscode.commands.registerCommand('uiua_keypad.activate_keypad', () => {

            if (panel) {
                panel.reveal(vscode.ViewColumn.One);
            } else {
                panel = vscode.window.createWebviewPanel(
                    'uiua_keypad_webviewpanel',
                    'Uiua Keypad',
                    vscode.ViewColumn.Two,
                    {
                        enableScripts: true,
                        enableCommandUris: true,
                        localResourceRoots: [
                            vscode.Uri.joinPath(context.extensionUri, 'webview_keypad')
                        ]
                    }
                );
                
                panel.webview.html = get_webview_content(context, panel);
                
                panel.onDidDispose(
                    () => {
                        panel = undefined;
                    },
                    undefined,
                    context.subscriptions
                );
                panel.webview.onDidReceiveMessage(async (message) => {
                    switch(message.command){

                        case "docs":
                            vscode.env.openExternal(vscode.Uri.parse(`https://uiua.org/docs/${message.page}`))
                            break
                        case "write":
                            if (!active_text_editor) {
                                vscode.window.showErrorMessage(
                                      `No active editor ${message.text===""?'':'to insert'} ${message.text}.\n`
                                    + `Please place your cursor.`
                                );
                                return;
                            }
                            const { selections } = active_text_editor;
                             // 1. Group the original selections by line.
                            let original_selections_lines:Map<number, vscode.Selection[]> = new Map();
                            for (const selection of selections) {
                                let line = selection.start.line;
                                let new_selections:vscode.Selection[] = original_selections_lines.get(line) || [];
                                new_selections.push(selection);
                                original_selections_lines.set(line, new_selections);
                            }

                            // 2. Sort the grouped selections for each line from left to right.
                            for (let line of original_selections_lines.values()) {
                                line.sort((a, b) => a.start.character - b.start.character);
                            }

                            // Perform the insertions.
                            await active_text_editor.edit(editBuilder => {
                                for (const selection of selections) {
                                    editBuilder.replace(selection.start, message.text);
                                }
                            });

                            // 3. Adjust the selections.
                            let newSelections = [];
                            for (let [line, original_selections] of original_selections_lines.entries()) {
                                let offset = 0;
                                for (const original_selection of original_selections) {
                                    let originalStart = original_selection.start.translate(0, offset);
                                    newSelections.push(new vscode.Selection(originalStart, originalStart));
                                    // Note: will misbehave if selection does not end on same
                                    // line... but then again... that means there are no further
                                    // selections on that line??
                                    offset += (
                                        original_selection.end.character
                                        - original_selection.start.character
                                    ) + message.text.length;
                                }
                            }
                            if (!message.move_cursor){
                                active_text_editor.selections = newSelections;
                            }
                            vscode.window.showTextDocument(
                                active_text_editor.document,
                                active_text_editor.viewColumn,
                                false
                            );
                    }
                });
            }
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('uiua_keypad.write_glyph', (value) => {
            vscode.window.showErrorMessage(`keypad_write ${value}`);
        })
    );

}

function get_webview_content(context: vscode.ExtensionContext, panel: vscode.WebviewPanel): string {
    let html_string = fs.readFileSync(
        path.join(context.extensionPath, "webview_keypad", "index.html"),
        'utf8'
    );

    // Replace filenames in the HTML with appropriate webview URIs
    // This enables easier testing of the webview in a browser during development
    return html_string.replace(
        /(href|src)=\"(.*?)\"/g, 
        (match, attributeName, originalPath) => { 
            // Only replace paths that don't start with "http" or "//" (to avoid modifying external links)
            if (!originalPath.startsWith('http') && !originalPath.startsWith('//')) {
                // Convert the matched filename to its corresponding webview URI
                return `${attributeName}="${panel.webview.asWebviewUri(
                    vscode.Uri.joinPath(context.extensionUri, "webview_keypad", originalPath)
                ).toString()}"`;
            }
            return match; // If it's an external link, return the match unchanged
        }
    );
}