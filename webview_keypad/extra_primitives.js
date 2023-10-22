// Kinda sucks to maintain this manually... but its fine for now.
const extra_primitives = [
    {
        "name": "array",
        "description": "",
        "glyph": "[]",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"arrays"
    },
    {
        "name": "box array",
        "description": "",
        "glyph": "{}",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"arrays#nested-arrays"
    },
    {
        "name": "function",
        "description": "",
        "glyph": "()",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"functions#inline-functions"
    },
    {
        "name": "character",
        "description": "",
        "glyph": "@",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"types#characters"
    },
    {
        "name": "format / multiline string",
        "description": "",
        "glyph": "$",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"functions#format-strings"
    },
    {
        "name": "String Delimiter",
        "description": "",
        "glyph": "\"",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"types#characters"
    },
    {
        "name": "Placeholder",
        "description": "",
        "glyph": "^",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"custommodifiers"
    },
    {
        "name": "Binding",
        "description": "Gives a global name a value",
        "glyph": "←",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"bindings"
    },
    {
        "name": "signature / terminator",
        "description": "",
        "glyph": "|",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"functions#stack-signatures"
    },
    {
        "name": "comment",
        "description": "",
        "glyph": "#",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"basic#comments"
    }
]