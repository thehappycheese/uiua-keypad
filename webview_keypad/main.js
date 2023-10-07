let vscode;
try{
    vscode = acquireVsCodeApi()
}catch(e){
    // facilitate testing the page without building the extension
    vscode = {};
    vscode.postMessage = (...args)=>console.log("postMessage", ...args);
}
let tooltip = document.querySelector("#tooltip-display");

document.querySelector("#button-holder").addEventListener("mouseover",e=>{
    if(e.target.attributes["data-title"]){
        tooltip.innerHTML = e.target.attributes["data-title"].value
    }
});

for(let glyph of glyphs){
    let button = document.createElement("button");
    
    button.setAttribute("data-title", glyph.title);
    button.setAttribute("data-ic", glyph.css_class);
    button.addEventListener("pointerup", e=>
        vscode.postMessage({
            command:"write_glyph",
            text:glyph.glyph,
            name:e.target.attributes["data-title"].value
        })
    )
    if(glyph.title=="transpose"){
        let div = document.createElement("div");
        div.setAttribute("class", "trans");
        div.innerText = glyph.glyph;
        button.appendChild(div);
    }else{
        button.innerText = glyph.glyph;
        button.setAttribute("style", `color:${glyph.color};`);
    }
    document.querySelector("#button-holder").appendChild(button);
}

document.querySelector("#move-cursor-check").addEventListener(
    "change",
    e=>vscode.postMessage({
        command:"set_move_cursor",
        value:e.target.checked
    })
);