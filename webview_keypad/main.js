
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
