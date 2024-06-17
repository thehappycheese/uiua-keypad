// Kinda sucks to maintain this manually... but its fine for now.
const extra_primitives = [
    {
        "name": "strand",
        "description": "Connect elements into an array 1_2_3 == [1 2 3]",
        "glyph": "_",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"arrays#creating-arrays"
    },
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
        "name": "switch",
        "description": "",
        "glyph": "⟨⟩",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"controlflow#switch"
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
        "name": "fmt/multiline str",
        "description": "",
        "glyph": "$",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"functions#format-strings"
    },
    {
        "name": "string",
        "description": "Create an array of chars",
        "glyph": "\"",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"types#characters"
    },
    {
        "name": "macro",
        "description": "",
        "glyph": "!",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"macros"
    },
    {
        "name": "placeholder",
        "description": "Create custom modifiers",
        "glyph": "^",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"custommodifiers"
    },
    {
        "name": "binding",
        "description": "Gives a global name a value",
        "glyph": "←",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"bindings"
    },
    {
        "name": "private binding",
        "description": "",
        "glyph": "↚",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"modules#visibility"
    },
    {
        "name": "import",
        "description": "",
        "glyph": "~",
        "count_inputs": null,
        "count_outputs": null,
        "count_modifier_inputs": null,
        "primitive_class": "Syntax",
        "docs":"modules"
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
        "primitive_class": "Comment",
        "docs":"tutorial/basic#comments"
    }
]