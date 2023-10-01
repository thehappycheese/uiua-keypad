
let vscode;
try{
    vscode = acquireVsCodeApi()
}catch(e){
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
