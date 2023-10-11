let vscode;
try{
    vscode = acquireVsCodeApi()
}catch(e){
    // facilitate testing the page without building the extension
    vscode = {};
    vscode.postMessage = (...args)=>console.log("postMessage", ...args);
}
let tooltip = document.querySelector("#tooltip-display");
let tooltipDesc = document.querySelector("#tooltip-display-desc");

for(let [k, v] of Object.entries(glyphs)){
    let button = document.createElement("button");

    button.setAttribute("data-title", k);
    button.addEventListener("click", ()=>
        vscode.postMessage({
            command:"write_glyph",
            text:v.glyph,
            name:button.attributes["data-title"].value
        })
    );
    button.addEventListener("mouseover", ()=>{
        tooltip.innerHTML = k;
        tooltipDesc.innerHTML = v.description;
    });
    button.innerHTML = `<div class="${v.class}">${v.glyph}</div>`;
    document.querySelector("#button-holder").appendChild(button);
}

document.querySelector("#move-cursor-check").addEventListener(
    "change",
    e=>vscode.postMessage({
        command:"set_move_cursor",
        value:e.target.checked
    })
);