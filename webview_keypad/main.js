let vscode;
try{
    vscode = acquireVsCodeApi()
}catch(e){
    // facilitate testing the page without building the extension
    vscode = {};
    vscode.postMessage = (...args)=>console.log("postMessage", ...args);
}

let tooltip_title    = document.querySelector("#tooltip-display");
let tooltip_subtitle = document.querySelector("#tooltip-display-desc");
const set_tooltip = (title, subtitle) => ()=>{
    tooltip_title.innerText    = title;
    tooltip_subtitle.innerText = subtitle;
};
const clear_tooltip = () => {
    tooltip_title.innerHTML     = "&nbsp;";
    tooltip_subtitle.innerHTML = "&nbsp;";
}
const configure_tooltip = (element, title, subtitle) => {
    element.addEventListener("mouseover", set_tooltip(title, subtitle));
    element.addEventListener("mouseout", clear_tooltip);
}

let event_target_is_not_a_button = e => !(e.target.tagName === "BUTTON" || e.target.parentElement?.tagName === "BUTTON")

document.addEventListener("contextmenu", e=>{
    if (event_target_is_not_a_button(e)){
        // Disable context menu on right click
        e.preventDefault();
        // Return focus if missed button
        vscode.postMessage({
            command     : "write",
            text        : "",
            move_cursor : true,
        });
    }
});
document.addEventListener("click", e=>{
    if (event_target_is_not_a_button(e)){
        // Return focus if missed button
        vscode.postMessage({
            command     : "write",
            text        : "",
            move_cursor : true,
        });
    }
});


let div_glyph    = document.querySelector("#div-glyph"   );
let div_nonglyph = document.querySelector("#div-nonglyph");
let div_system   = document.querySelector("#div-system"  );
let div_constant = document.querySelector("#div-constant");

for(let primitive of [...primitives, ...extra_primitives]){
    
    let button = document.createElement("button");
    configure_tooltip(button, primitive.name, primitive.description);
    let button_inner_div = document.createElement("div");
    button.appendChild(button_inner_div);
    
    let text_to_write = primitive.glyph || primitive.name;
    button_inner_div.innerText = text_to_write;
    

    // TODO: having trouble with this... should able to ignore this at the document level
    //       then listen to click with e.button === 2 but for some reason only this 
    //       event listener setup seems to work :/
    button.addEventListener(
        "contextmenu",
        e =>{
            e.preventDefault();
            vscode.postMessage({
                command     : "write",
                text        : text_to_write,
                move_cursor : false,
            });
        }
    )

    button.addEventListener(
        "click",
        e => vscode.postMessage({
            command     : "write",
            text        : text_to_write,
            move_cursor : true,
        })
    );
    
    button_inner_div.classList.add("code-font")
    if (primitive.name==="transpose"){
        button_inner_div.classList.add("trans")
    }else if(primitive.primitive_class=="Stack" && primitive.count_modifier_inputs===null){
        button_inner_div.classList.add("stack-function-button")
    }else if(primitive.count_inputs===null){
        if(primitive.count_modifier_inputs===null){
            button_inner_div.classList.add("variadic-function-button")
        }else{
            button_inner_div.classList.add(`modifier${primitive.count_modifier_inputs}-button`)
        }
    }else{
        button_inner_div.classList.add(
            ["no","mon","dy","tri"][primitive.count_inputs]+"adic-function-button"
        )
    }

    if (primitive.glyph){
        document.querySelector("#div-glyph").appendChild(button);
    }else if(primitive.primitive_class==="Sys"){
        document.querySelector("#div-system").appendChild(button);
    }else{
        document.querySelector("#div-nonglyph").appendChild(button);
    }
}

for(let constant of constants){
    let button = document.createElement("button");
    configure_tooltip(button, constant.name, constant.description);
    let button_inner_div = document.createElement("div");
    button.appendChild(button_inner_div);
    button_inner_div.innerText = constant.name;
    button.addEventListener("click", e =>
        vscode.postMessage({
            command     : "write",
            text        : constant.name,
            move_cursor : e.ctrlKey,
        })
    );
    button_inner_div.classList.add("code-font")
    document.querySelector("#div-constant").appendChild(button);
}

