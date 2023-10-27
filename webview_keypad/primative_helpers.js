
/**
 * @typedef {Object} Primitive
 * @property {string} name - The name of the primitive.
 * @property {string} description - A description of what the primitive does.
 * @property {?string} glyph - A symbol representing the primitive.
 * @property {?number} count_inputs - The number of input values the primitive takes.
 * @property {?number} count_outputs - The number of output values the primitive produces.
 * @property {?number} count_modifier_inputs - The number of modifier input values the primitive takes, or null if none.
 * @property {?string} primitive_class - The class of the primitive.
 */



const adic_map = new Map([
    [0, "noadic"],
    [1, "monadic"],
    [2, "dyadic"],
])

/**
 * @param {Primitive} primitive - The primitive to style.
 * @returns {Array<string>}
 */
function primitive_style(primitive){
    if (primitive.primitive_class === "Comment")
        return ["comment-span"];
    if (primitive.primitive_class === "Ocean")
        return ["ocean-function"];
    if (primitive.name === "transpose")
        return ["trans"];
    if (primitive.primitive_class === "Syntax")
        return [];
    if (primitive.count_modifier_inputs !== null)
        return [`${adic_map.get(primitive.count_modifier_inputs)}-modifier`];
    if (primitive.primitive_class === "Stack")
        return ["stack-function"];
    if (primitive.count_inputs !== null)
        return [`${adic_map.get(primitive.count_inputs)}-function`];
    return ["unknown"];
}

/**
 * 
 * @param {Primitive} primitive 
 */
function primitive_signature(primitive){
    let has_modifier = primitive.count_modifier_inputs !== null;
    let has_inputs = primitive.count_inputs !== null;
    if (primitive.count_outputs === null) return "";

    let result = "|"
    if (has_inputs){
        result = result +primitive.count_inputs.toFixed(0);
    }
    if (primitive.count_outputs !== 1){
        result = result + "." + primitive.count_outputs.toFixed(0);
    }
    if (has_modifier){
        result = primitive.count_modifier_inputs.toFixed(0) + result;
    }
    return result;
}