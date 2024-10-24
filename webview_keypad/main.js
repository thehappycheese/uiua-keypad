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




/**
 * 
 * @param {Primitive} primitive
 */
const periodic_glyph_div = document.querySelector("#periodic-glyph");
const periodic_signature_div = document.querySelector("#periodic-signature");
const periodic_pervasive = document.querySelector("#periodic-pervasive");
function set_tooltip(primitive) {
    return ()=>{
        tooltip_title.innerText    = primitive.name;
        tooltip_subtitle.innerText = primitive.description;
        periodic_glyph_div.innerText = primitive.glyph ?? "";
        periodic_glyph_div.setAttribute("class", "code-font use-glyph-font " + primitive_style(primitive));
        if (primitive.deprecated && primitive.experimental){
            periodic_glyph_div.classList.add("deprecated");
            periodic_glyph_div.classList.add("experimental");
            tooltip_subtitle.innerText = "🧪⚠️ Experimental & Deprecated: " + tooltip_subtitle.innerText;
        }else if(primitive.deprecated){
            periodic_glyph_div.classList.add("deprecated");
            tooltip_subtitle.innerText = "⚠️ Deprecated: " + tooltip_subtitle.innerText;
        }else if(primitive.experimental){
            periodic_glyph_div.classList.add("experimental");
            tooltip_subtitle.innerText = "🧪 Experimental: "+tooltip_subtitle.innerText;
        }
        if (primitive.class){
            tooltip_subtitle.innerText=primitive.class+": "+tooltip_subtitle.innerText;
        }
        periodic_signature_div.innerText = primitive_signature(primitive);
        const indicatorsMap = {
            "Pervasive"   : "🐜",
            "Array"       : "🐟",
            "Aggregating" : "🧺",
            "Planet"      : "🪐",
            "Ocean"       : "🌊",
            "Control"     : "🕹️",
            "Iterating"   : "🍇",
            "Stack"       : "🥞",
            "Map"         : "🗺️",
        };
        const other_indicators = Object.keys(indicatorsMap).reduce(
            (acc, key) => primitive.primitive_class?.includes(key) ? acc + indicatorsMap[key] : acc,
            ""
        );
        periodic_pervasive.innerText = other_indicators;
    };
};
const clear_tooltip = () => {
    tooltip_title.innerHTML    = "&nbsp;";
    tooltip_subtitle.innerHTML = "&nbsp;";
};

/**
 * 
 * @param {HTMLElement} element 
 * @param {Primitive} primitive 
 */
function configure_tooltip (element, primitive) {
    element.addEventListener("mouseover", set_tooltip(primitive));
    element.addEventListener("mouseout", clear_tooltip);
    
}

let event_target_is_not_a_button = e => !(e.target.tagName === "BUTTON" || e.target.parentElement?.tagName === "BUTTON")

document.addEventListener("contextmenu", e=> {
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
    configure_tooltip(button, primitive);
    let button_inner_div = document.createElement("div");
    button.appendChild(button_inner_div);
    
    let text_to_write = primitive.glyph || primitive.name;
    button_inner_div.innerText = text_to_write;

    if(primitive.deprecated){
        button.classList.add("deprecated");
    }
    if(primitive.experimental){
        button.classList.add("experimental");
    }

    

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
        e => e.ctrlKey ?
            // open docs
            vscode.postMessage({
                command : "docs",
                page    : primitive.docs ?? primitive.name,
            })
            :
            vscode.postMessage({
                command     : "write",
                text        : text_to_write,
                move_cursor : true,
            })
    );
    
    ["code-font", ...primitive_style(primitive)].forEach(item=>button.classList.add(item));

    if (primitive.glyph){
        button.classList.add("use-glyph-font");
        document.querySelector("#div-glyph").appendChild(button);

    }else if(primitive?.primitive_class?.startsWith("Sys")){
        document.querySelector("#div-system").appendChild(button);
    }else{
        document.querySelector("#div-nonglyph").appendChild(button);
    }

}

for (let constant of constants) {
    let button = document.createElement("button");
    configure_tooltip(button, constant);
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
    button_inner_div.classList.add("noadic-function")
    document.querySelector("#div-constant").appendChild(button);
}

