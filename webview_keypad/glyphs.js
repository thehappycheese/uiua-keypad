const glyphs = [
    {
        "glyph": ".",
        "title": "duplicate",
        "css_class": "stack-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": ",",
        "title": "over",
        "css_class": "stack-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": "∶",
        "title": "(:) flip",
        "css_class": "stack-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": ";",
        "title": "pop",
        "css_class": "stack-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": "∘",
        "title": "identity",
        "css_class": "stack-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": "¬",
        "title": "not",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "±",
        "title": "sign",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "¯",
        "title": "(`) negate",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⌵",
        "title": "absolute value",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "√",
        "title": "sqrt",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "○",
        "title": "sine",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⌊",
        "title": "floor",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⌈",
        "title": "ceiling",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⁅",
        "title": "round",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "=",
        "title": "(=) equals",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "≠",
        "title": "(!=) not equals",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "<",
        "title": "less than",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "≤",
        "title": "(<=) less or equal",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": ">",
        "title": "greater than",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "≥",
        "title": "(>=) greater or equal",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "+",
        "title": "add",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "-",
        "title": "subtract",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "×",
        "title": "(*) multiply",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "÷",
        "title": "(%) divide",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "◿",
        "title": "modulus",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "ⁿ",
        "title": "power",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "ₙ",
        "title": "logarithm",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "↧",
        "title": "minimum",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "↥",
        "title": "maximum",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "∠",
        "title": "atangent",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "⧻",
        "title": "length",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "△",
        "title": "shape",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⇡",
        "title": "range",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⊢",
        "title": "first",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⇌",
        "title": "reverse",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "♭",
        "title": "deshape",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⋯",
        "title": "bits",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⍉",
        "title": "transpose",
        "css_class": "trans",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⍏",
        "title": "rise",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⍖",
        "title": "fall",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⊛",
        "title": "classify",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⊝",
        "title": "deduplicate",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "□",
        "title": "box",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⊔",
        "title": "unbox",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "≅",
        "title": "match",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "⊟",
        "title": "couple",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "⊂",
        "title": "join",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "⊏",
        "title": "select",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "⊡",
        "title": "pick",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "↯",
        "title": "reshape",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "↙",
        "title": "take",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "↘",
        "title": "drop",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "↻",
        "title": "rotate",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "◫",
        "title": "windows",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "▽",
        "title": "keep",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "⌕",
        "title": "find",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "∊",
        "title": "member",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "⊗",
        "title": "indexof",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "/",
        "title": "reduce",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "∧",
        "title": "fold",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "\\",
        "title": "scan",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "∵",
        "title": "each",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "≡",
        "title": "rows",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "∺",
        "title": "distribute",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "⊞",
        "title": "table",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "⊠",
        "title": "cross",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "⍥",
        "title": "repeat",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "⊕",
        "title": "group",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "⊜",
        "title": "partition",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "∩",
        "title": "both",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "⊓",
        "title": "bracket",
        "css_class": "modifier2-button",
        "color": "rgb(204, 107, 233)"
    },
    {
        "glyph": "⊃",
        "title": "fork",
        "css_class": "modifier2-button",
        "color": "rgb(204, 107, 233)"
    },
    {
        "glyph": "⊙",
        "title": "dip",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "⋅",
        "title": "gap",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "⍘",
        "title": "invert",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "⍜",
        "title": "under",
        "css_class": "modifier2-button",
        "color": "rgb(204, 107, 233)"
    },
    {
        "glyph": "⍚",
        "title": "level",
        "css_class": "modifier2-button",
        "color": "rgb(204, 107, 233)"
    },
    {
        "glyph": "⬚",
        "title": "fill",
        "css_class": "modifier2-button",
        "color": "rgb(204, 107, 233)"
    },
    {
        "glyph": "'",
        "title": "bind",
        "css_class": "modifier2-button",
        "color": "rgb(204, 107, 233)"
    },
    {
        "glyph": "?",
        "title": "if",
        "css_class": "modifier2-button",
        "color": "rgb(204, 107, 233)"
    },
    {
        "glyph": "⍣",
        "title": "try",
        "css_class": "modifier2-button",
        "color": "rgb(204, 107, 233)"
    },
    {
        "glyph": "⍤",
        "title": "assert",
        "css_class": "dyadic-function-button",
        "color": "rgb(84, 176, 252)"
    },
    {
        "glyph": "↰",
        "title": "spawn",
        "css_class": "modifier1-button",
        "color": "rgb(240, 195, 111)"
    },
    {
        "glyph": "↲",
        "title": "wait",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "!",
        "title": "call",
        "css_class": "variadic-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": "⎋",
        "title": "break",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "↬",
        "title": "recur",
        "css_class": "monadic-function-button",
        "color": "rgb(149, 209, 106)"
    },
    {
        "glyph": "⚂",
        "title": "random",
        "css_class": "noadic-function-button",
        "color": "rgb(237, 94, 106)"
    },
    {
        "glyph": "η",
        "title": "eta",
        "css_class": "noadic-function-button",
        "color": "rgb(237, 94, 106)"
    },
    {
        "glyph": "π",
        "title": "pi",
        "css_class": "noadic-function-button",
        "color": "rgb(237, 94, 106)"
    },
    {
        "glyph": "τ",
        "title": "tau",
        "css_class": "noadic-function-button",
        "color": "rgb(237, 94, 106)"
    },
    {
        "glyph": "∞",
        "title": "infinity",
        "css_class": "noadic-function-button",
        "color": "rgb(237, 94, 106)"
    },
    {
        "glyph": "~",
        "title": "trace",
        "css_class": "stack-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": "_",
        "title": "strand",
        "css_class": "misc-function-button",
        "color": "rgba(255, 255, 255, 0.533)"
    },
    {
        "glyph": "[]",
        "title": "array",
        "css_class": "misc-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": "{}",
        "title": "box array",
        "css_class": "misc-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": "()",
        "title": "function",
        "css_class": "misc-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": "¯",
        "title": "negative (`)",
        "css_class": "misc-function-button",
        "color": "rgb(255, 136, 68)"
    },
    {
        "glyph": "@",
        "title": "character",
        "css_class": "misc-function-button",
        "color": "rgb(32, 249, 252)"
    },
    {
        "glyph": "$",
        "title": "format/multiline string",
        "css_class": "misc-function-button",
        "color": "rgb(32, 249, 252)"
    },
    {
        "glyph": "\"",
        "title": "string",
        "css_class": "misc-function-button",
        "color": "rgb(32, 249, 252)"
    },
    {
        "glyph": "^",
        "title": "terminate modifier",
        "css_class": "misc-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": "←",
        "title": "binding (=)",
        "css_class": "misc-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": "|",
        "title": "signature",
        "css_class": "misc-function-button",
        "color": "rgb(209, 218, 236)"
    },
    {
        "glyph": "#",
        "title": "comment",
        "css_class": "misc-function-button",
        "color": "rgb(136, 136, 136)"
    }
]