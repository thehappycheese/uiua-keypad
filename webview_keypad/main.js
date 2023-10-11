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

for(let glyph of glyphs){
    let button = document.createElement("button");

    button.setAttribute("data-title", glyph.name);
    button.addEventListener("click", ()=>
        vscode.postMessage({
            command:"write_glyph",
            text:glyph.glyph,
            name:button.attributes["data-title"].value
        })
    );
    button.addEventListener("mouseover", ()=>{
        tooltip.innerHTML = glyph.name;
        tooltipDesc.innerHTML = glyph.description;
    });
    button.innerHTML = `<div class="${glyph.class}">${glyph.glyph}</div>`;
    document.querySelector("#button-holder").appendChild(button);
}

document.querySelector("#move-cursor-check").addEventListener(
    "change",
    e=>vscode.postMessage({
        command:"set_move_cursor",
        value:e.target.checked
    })
);