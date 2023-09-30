import * as vscode from 'vscode';

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
function getWebviewContent() {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Uiua Keypad</title>
            <style>
    
                body{
                    font-family:  "DejaVu Sans Mono", sans-serif;
                    user-select: none;
                }
                #tooltip-display{
                    font-size: 1.5em;
                }
                #button-holder{
                    font-size:2em;
                    display:flex;
                    flex-wrap: wrap;
                }
                #button-holder > button{
                    font-family:  "DejaVu Sans Mono", sans-serif;
                    width:2em;
                    font-size:1.2em;
                    background-color: #19232d;
                    margin:0.1em;
                }
                .stack-function-button {
                    color:#d1daec;
                }
                .monadic-function-button{
                    color: #95d16a;
                }
                .dyadic-function-button{
                    color:#54b0fc;
                }
                .modifier1-button{
                    color:#f0c36f;
                }
                .modifier2-button{
                    color:#cc6be9;
                }
                .noadic-function-button{
                    color:#ed5e6a;
                }
                .stack-function-button{
                    color:#aadaec;;
                }
                .misc-function-button{
                    color:lightgray;
                }
                .trans{
                    background-image: linear-gradient(180deg, #5BCEFA 29%, #F5A9B8 29%, #F5A9B8 43%, #FFFFFF 43%, #FFFFFF 57%, #F5A9B8 57%, #F5A9B8 71%, #5BCEFA 71%);
                    background-size: 100%;
                    background-clip: text;
                    -webkit-background-clip: text;
                    -moz-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    -moz-text-fill-color: transparent;
                }
                .fb{
                    break-after: always;
                }
            </style>
            <script>
            window.addEventListener("DOMContentLoaded",e=>{
                let vscode = acquireVsCodeApi()
                let tooltip = document.querySelector("#tooltip-display");
                document.querySelector("#button-holder").addEventListener("mouseover",e=>{
                    if(e.target.attributes["data-title"]){
                        tooltip.innerHTML = e.target.attributes["data-title"].value
                    }
                });
                document.querySelector("#button-holder").addEventListener("mouseup", e=>{
                    if(e.target.attributes["data-title"]){
                        let glyph = e.target.innerHTML;
                        if (glyph=="&lt;"){
                            glyph = "<";
                        }else if(glyph==="&gt;"){
                            glyph=">";
                        }
                        vscode.postMessage({
                            command:"write_glyph",
                            text:glyph,
                            name:e.target.attributes["data-title"].value
                        })
                    }
                })
            })
        </script>
        </head>
        <body>
            <div>
                <div id="tooltip-display">&nbsp;</div>
            </div>
            <div id="button-holder">
    <button data-title="duplicate"               class="stack-function-button"        >.</button>
    <button data-title="over"                    class="stack-function-button"        >,</button>
    <button data-title="(:) flip"                class="stack-function-button"        >∶</button>
    <button data-title="pop"                     class="stack-function-button"        >;</button>
    <button data-title="noop"                    class="stack-function-button"        >·</button>
    <button data-title="roll"                    class="stack-function-button"        >↷</button>
    <button data-title="unroll"                  class="stack-function-button"        >↶</button>
    <button data-title="restack"                 class="stack-function-button fb"        >⇵</button>
    <button data-title="not"                     class="monadic-function-button"      >¬</button>
    <button data-title="sign"                    class="monadic-function-button"      >±</button>
    <button data-title="(\`) negate"              class="monadic-function-button"      >¯</button>
    <button data-title="absolute value"          class="monadic-function-button"      >⌵</button>
    <button data-title="sqrt"                    class="monadic-function-button"      >√</button>
    <button data-title="sine"                    class="monadic-function-button"      >○</button>
    <button data-title="floor"                   class="monadic-function-button"      >⌊</button>
    <button data-title="ceiling"                 class="monadic-function-button"      >⌈</button>
    <button data-title="round"                   class="monadic-function-button fb"      >⁅</button>
    <button data-title="(=) equals"              class="dyadic-function-button"       >=</button>
    <button data-title="(!=) not equals"         class="dyadic-function-button"       >≠</button>
    <button data-title="less than"               class="dyadic-function-button"       >&lt;</button>
    <button data-title="(<=) less or equal"      class="dyadic-function-button"       >≤</button>
    <button data-title="greater than"            class="dyadic-function-button"       >&gt;</button>
    <button data-title="(>=) greater or equal"   class="dyadic-function-button"       >≥</button>
    <button data-title="add"                     class="dyadic-function-button"       >+</button>
    <button data-title="subtract"                class="dyadic-function-button"       >-</button>
    <button data-title="(*) multiply"            class="dyadic-function-button"       >×</button>
    <button data-title="(%) divide"              class="dyadic-function-button"       >÷</button>
    <button data-title="modulus"                 class="dyadic-function-button"       >◿</button>
    <button data-title="power"                   class="dyadic-function-button"       >ⁿ</button>
    <button data-title="logarithm"               class="dyadic-function-button"       >ₙ</button>
    <button data-title="minimum"                 class="dyadic-function-button"       >↧</button>
    <button data-title="maximum"                 class="dyadic-function-button"       >↥</button>
    <button data-title="atangent"                class="dyadic-function-button fb"       >∠</button>
    <button data-title="length"                  class="monadic-function-button"      >⧻</button>
    <button data-title="rank"                    class="monadic-function-button"      >∴</button>
    <button data-title="shape"                   class="monadic-function-button"      >△</button>
    <button data-title="range"                   class="monadic-function-button"      >⇡</button>
    <button data-title="first"                   class="monadic-function-button"      >⊢</button>
    <button data-title="reverse"                 class="monadic-function-button"      >⇌</button>
    <button data-title="deshape"                 class="monadic-function-button"      >♭</button>
    <button data-title="bits"                    class="monadic-function-button"      >⋯</button>
    <button data-title="transpose"               class="monadic-function-button trans">⍉</button>
    <button data-title="grade"                   class="monadic-function-button"      >⌂</button>
    <button data-title="classify"                class="monadic-function-button"      >⊛</button>
    <button data-title="deduplicate"             class="monadic-function-button"      >⊝</button>
    <button data-title="constant"                class="monadic-function-button fb"      >□</button>
    <button data-title="join"                    class="dyadic-function-button"       >⊂</button>
    <button data-title="couple"                  class="dyadic-function-button"       >⊟</button>
    <button data-title="match"                   class="dyadic-function-button"       >≅</button>
    <button data-title="pick"                    class="dyadic-function-button"       >⊡</button>
    <button data-title="select"                  class="dyadic-function-button"       >⊏</button>
    <button data-title="reshape"                 class="dyadic-function-button"       >↯</button>
    <button data-title="take"                    class="dyadic-function-button"       >↙</button>
    <button data-title="drop"                    class="dyadic-function-button"       >↘</button>
    <button data-title="rotate"                  class="dyadic-function-button"       >↻</button>
    <button data-title="windows"                 class="dyadic-function-button"       >◫</button>
    <button data-title="keep"                    class="dyadic-function-button"       >▽</button>
    <button data-title="find"                    class="dyadic-function-button"       >⌕</button>
    <button data-title="member"                  class="dyadic-function-button"       >∊</button>
    <button data-title="indexof"                 class="dyadic-function-button"       >⊗</button>
    <button data-title="reduce"                  class="modifier1-button"             >/</button>
    <button data-title="fold"                    class="modifier1-button"             >∧</button>
    <button data-title="scan"                    class="modifier1-button"             >\</button>
    <button data-title="each"                    class="modifier1-button"             >∵</button>
    <button data-title="rows"                    class="modifier1-button"             >≡</button>
    <button data-title="distribute"              class="modifier1-button"             >∺</button>
    <button data-title="table"                   class="modifier1-button"             >⊞</button>
    <button data-title="cross"                   class="modifier1-button"             >⊠</button>
    <button data-title="repeat"                  class="modifier1-button"             >⍥</button>
    <button data-title="group"                   class="modifier1-button"             >⊕</button>
    <button data-title="partition"               class="modifier1-button"             >⊜</button>
    <button data-title="invert"                  class="modifier1-button"             >⍘</button>
    <button data-title="under"                   class="modifier2-button"             >⍜</button>
    <button data-title="fill"                    class="modifier2-button"             >⍛</button>
    <button data-title="level"                   class="modifier2-button"             >⍚</button>
    <button data-title="bind"                    class="modifier2-button"             >'</button>
    <button data-title="both"                    class="modifier1-button"             >∷</button>
    <button data-title="fork"                    class="modifier2-button"             >⊃</button>
    <button data-title="trident"                 class="modifier2-button"             >∋</button>
    <button data-title="try"                     class="modifier2-button"             >⍣</button>
    <button data-title="assert"                  class="dyadic-function-button"       >⍤</button>
    <button data-title="spawn"                   class="modifier1-button"             >↰</button>
    <button data-title="wait"                    class="monadic-function-button"      >↲</button>
    <button data-title="call"                    class="monadic-function-button"      >!</button>
    <button data-title="break"                   class="monadic-function-button"      >⎋</button>
    <button data-title="recur"                   class="monadic-function-button"      >↬</button>
    <button data-title="random"                  class="noadic-function-button"       >⚂</button>
    <button data-title="eta"                     class="noadic-function-button"       >η</button>
    <button data-title="pi"                      class="noadic-function-button"       >π</button>
    <button data-title="tau"                     class="noadic-function-button"       >τ</button>
    <button data-title="infinity"                class="noadic-function-button"       >∞</button>
    <button data-title="trace"                   class="stack-function-button"        >~</button>
    <button data-title="strand"                  class="misc-function-button"         >_</button>
    <button data-title="array"                   class="misc-function-button"         >[]</button>
    <button data-title="constant array"          class="misc-function-button"         >{}</button>
    <button data-title="function"                class="misc-function-button"         >()</button>
    <button data-title="negative (\`)"            class="misc-function-button"         >¯</button>
    <button data-title="character"               class="misc-function-button"         >@</button>
    <button data-title="format/multiline string" class="misc-function-button"         >$</button>
    <button data-title="string"                  class="misc-function-button"         >"</button>
    <button data-title="terminate modifier"      class="misc-function-button"         >^</button>
    <button data-title="binding (=)"             class="misc-function-button"         >←</button>
    <button data-title="signature"               class="misc-function-button"         >|</button>
    <button data-title="comment"                 class="misc-function-button"         >#</button>
    </div>
        
        </body>
    </html>`;
}