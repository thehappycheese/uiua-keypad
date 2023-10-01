import * as vscode from 'vscode';
import { getWebviewContent } from './webview_content';

export function activate(context: vscode.ExtensionContext) {

    let currentPanel: vscode.WebviewPanel | undefined = undefined;

    context.subscriptions.push(
        vscode.commands.registerCommand('uiua_keypad.activate_keypad', () => {

            if (currentPanel) {
                currentPanel.reveal(vscode.ViewColumn.One);
            } else {
                currentPanel = vscode.window.createWebviewPanel(
                    'uiua_keypad_webviewpanel',
                    'Uiua Keypad',
                    vscode.ViewColumn.Beside,
                    {
                        enableScripts: true,
                    }
                );
                currentPanel.webview.html = getWebviewContent();
                
                currentPanel.onDidDispose(
                    () => {
                        currentPanel = undefined;
                    },
                    undefined,
                    context.subscriptions
                );
                currentPanel.webview.onDidReceiveMessage(async (message) => {
                    switch(message.command){
                        case "write_glyph":
                            //vscode.window.showErrorMessage(message.text);
                            let editor = vscode.window.activeTextEditor;
                            if (!editor) {
                                await vscode.commands.executeCommand('workbench.action.previousEditor');
                                editor = vscode.window.activeTextEditor;
                            }
                            if (editor) {
                                const { selections } = editor;
                                editor.edit(editBuilder => {
                                    for (const selection of selections) {
                                        editBuilder.insert(selection.start, message.text);
                                    }
                                });
                            }else{
                                vscode.window.showErrorMessage(`No active editor to insert ${message.text}`);
                            }
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
