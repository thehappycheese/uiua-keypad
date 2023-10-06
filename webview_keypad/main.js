
let vscode;
try{
    vscode = acquireVsCodeApi()
}catch(e){
    // facilitate testing the page without building the extension
    vscode = {};
    vscode.postMessage = (...args)=>console.log("postMessage", ...args);
}

for(let glyph of glyphs){
    let button = document.createElement("button");
    button.innerHTML = `<div>${glyph.glyph}</div>`;
    button.setAttribute("data-title", glyph.title);
    
    button.setAttribute("data-ic", glyph.css_class);
    if(glyph.title=="transpose"){
        button.querySelector("div").setAttribute("class", "trans");
    }else{
        button.querySelector("div").setAttribute("style", `color:${glyph.color};`);
    }
    document.querySelector("#button-holder").appendChild(button);
}
