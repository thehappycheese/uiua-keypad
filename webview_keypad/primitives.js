const primitives=[
    {
        "name": "duplicate",
        "description": "Duplicate the top value on the stack",
        "glyph": ".",
        "count_inputs": 1,
        "count_outputs": 2,
        "count_modifier_inputs": null,
        "primitive_class": "Stack"
    },
    {
        "name": "over",
        "description": "Duplicate the second-to-top value to the top of the stack",
        "glyph": ",",
        "count_inputs": 2,
        "count_outputs": 3,
        "count_modifier_inputs": null,
        "primitive_class": "Stack"
    },
    {
        "name": "flip",
        "description": "Swap the top two values on the stack",
        "glyph": "∶",
        "count_inputs": 2,
        "count_outputs": 2,
        "count_modifier_inputs": null,
        "primitive_class": "Stack"
    },
    {
        "name": "pop",
        "description": "Discard the top stack value",
        "glyph": ";",
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Stack"
    },
    {
        "name": "identity",
        "description": "Do nothing",
        "glyph": "∘",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Planet"
    },
    {
        "name": "not",
        "description": "Logical not",
        "glyph": "¬",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicPervasive"
    },
    {
        "name": "sign",
        "description": "Numerical sign (1, ¯1, or 0)",
        "glyph": "±",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicPervasive"
    },
    {
        "name": "negate",
        "description": "Negate a number",
        "glyph": "¯",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicPervasive"
    },
    {
        "name": "absolute value",
        "description": "Get the absolute value of a number",
        "glyph": "⌵",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicPervasive"
    },
    {
        "name": "sqrt",
        "description": "Take the square root of a number",
        "glyph": "√",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicPervasive"
    },
    {
        "name": "sine",
        "description": "Get the sine of a number",
        "glyph": "○",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicPervasive"
    },
    {
        "name": "floor",
        "description": "Round to the nearest integer towards ¯∞",
        "glyph": "⌊",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicPervasive"
    },
    {
        "name": "ceiling",
        "description": "Round to the nearest integer towards ∞",
        "glyph": "⌈",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicPervasive"
    },
    {
        "name": "round",
        "description": "Round to the nearest integer",
        "glyph": "⁅",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicPervasive"
    },
    {
        "name": "equals",
        "description": "Compare for equality",
        "glyph": "=",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "not equals",
        "description": "Compare for inequality",
        "glyph": "≠",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "less than",
        "description": "Compare for less than",
        "glyph": "<",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "less or equal",
        "description": "Compare for less than or equal",
        "glyph": "≤",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "greater than",
        "description": "Compare for greater than",
        "glyph": ">",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "greater or equal",
        "description": "Compare for greater than or equal",
        "glyph": "≥",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "add",
        "description": "Add values",
        "glyph": "+",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "subtract",
        "description": "Subtract values",
        "glyph": "-",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "multiply",
        "description": "Multiply values",
        "glyph": "×",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "divide",
        "description": "Divide values",
        "glyph": "÷",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "modulus",
        "description": "Modulo values",
        "glyph": "◿",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "power",
        "description": "Raise a value to a power",
        "glyph": "ⁿ",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "logarithm",
        "description": "Get the based logarithm of a number",
        "glyph": "ₙ",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "minimum",
        "description": "Take the minimum of two arrays",
        "glyph": "↧",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "maximum",
        "description": "Take the maximum of two arrays",
        "glyph": "↥",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "atangent",
        "description": "Take the arctangent of two numbers",
        "glyph": "∠",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicPervasive"
    },
    {
        "name": "length",
        "description": "Get the number of rows in an array",
        "glyph": "⧻",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "shape",
        "description": "Get the dimensions of an array",
        "glyph": "△",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "range",
        "description": "Make an array of all natural numbers less than a number",
        "glyph": "⇡",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "first",
        "description": "Get the first row of an array",
        "glyph": "⊢",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "reverse",
        "description": "Reverse the rows of an array",
        "glyph": "⇌",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "deshape",
        "description": "Make an array 1-dimensional",
        "glyph": "♭",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "bits",
        "description": "Encode an array as bits (big-endian)",
        "glyph": "⋯",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "transpose",
        "description": "Rotate the shape of an array",
        "glyph": "⍉",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "rise",
        "description": "Get the indices into an array if it were sorted ascending",
        "glyph": "⍏",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "fall",
        "description": "Get the indices into an array if it were sorted descending",
        "glyph": "⍖",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "where",
        "description": "Get indices where array values are not equal to zero",
        "glyph": "⊚",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "classify",
        "description": "Assign a unique index to each unique element in an array",
        "glyph": "⊛",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "deduplicate",
        "description": "Remove duplicate elements from an array",
        "glyph": "⊝",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "box",
        "description": "Turn an array into a box",
        "glyph": "□",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "unbox",
        "description": "Take an array out of a box",
        "glyph": "⊔",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "MonadicArray"
    },
    {
        "name": "match",
        "description": "Check if two arrays are exactly the same",
        "glyph": "≍",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "couple",
        "description": "Combine two arrays as rows of a new array",
        "glyph": "⊟",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "join",
        "description": "Append two arrays end-to-end",
        "glyph": "⊂",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "select",
        "description": "Select multiple rows from an array",
        "glyph": "⊏",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "pick",
        "description": "Index a row or elements from an array",
        "glyph": "⊡",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "reshape",
        "description": "Change the shape of an array",
        "glyph": "↯",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "take",
        "description": "Take the first n elements of an array",
        "glyph": "↙",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "drop",
        "description": "Drop the first n elements of an array",
        "glyph": "↘",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "rotate",
        "description": "Rotate the elements of an array by n",
        "glyph": "↻",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "windows",
        "description": "The n-wise windows of an array",
        "glyph": "◫",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "keep",
        "description": "Discard or copy some rows of an array",
        "glyph": "▽",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "find",
        "description": "Find the occurences of one array in another",
        "glyph": "⌕",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "member",
        "description": "Check if each row of one array exists in another",
        "glyph": "∊",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "indexof",
        "description": "Find the index of each row of one array in another",
        "glyph": "⊗",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "DyadicArray"
    },
    {
        "name": "reduce",
        "description": "Apply a reducing function to an array",
        "glyph": "/",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "AggregatingModifier"
    },
    {
        "name": "scan",
        "description": "Reduce, but keep intermediate values",
        "glyph": "\\",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "AggregatingModifier"
    },
    {
        "name": "each",
        "description": "Apply a function to each element of an array or arrays.",
        "glyph": "∵",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "IteratingModifier"
    },
    {
        "name": "rows",
        "description": "Apply a function to each row of an array or arrays",
        "glyph": "≡",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "IteratingModifier"
    },
    {
        "name": "distribute",
        "description": "Apply a function to a fixed value and each row of an array",
        "glyph": "∺",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "IteratingModifier"
    },
    {
        "name": "tribute",
        "description": "Apply a function to each row of an array and a fixed value",
        "glyph": "≐",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "IteratingModifier"
    },
    {
        "name": "table",
        "description": "Apply a function to each combination of elements of two arrays",
        "glyph": "⊞",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "IteratingModifier"
    },
    {
        "name": "cross",
        "description": "Apply a function to each combination of rows of two arrays",
        "glyph": "⊠",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "IteratingModifier"
    },
    {
        "name": "repeat",
        "description": "Repeat a function a number of times",
        "glyph": "⍥",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "IteratingModifier"
    },
    {
        "name": "group",
        "description": "Group elements of an array into buckets by index",
        "glyph": "⊕",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "AggregatingModifier"
    },
    {
        "name": "partition",
        "description": "Group elements of an array into buckets by sequential keys",
        "glyph": "⊜",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "AggregatingModifier"
    },
    {
        "name": "pack",
        "description": "Apply a function with implicit (un)boxing",
        "glyph": "⊐",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "OtherModifier"
    },
    {
        "name": "invert",
        "description": "Invert the behavior of a function",
        "glyph": "⍘",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "OtherModifier"
    },
    {
        "name": "gap",
        "description": "Discard the top stack value then call a function",
        "glyph": "⋅",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "Planet"
    },
    {
        "name": "reach",
        "description": "Pop the second stack value then call a function",
        "glyph": "⟜",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "Planet"
    },
    {
        "name": "dip",
        "description": "Temporarily pop the top value off the stack and call a function",
        "glyph": "⊙",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "Planet"
    },
    {
        "name": "both",
        "description": "Call a function on two sets of values",
        "glyph": "∩",
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "Stack"
    },
    {
        "name": "fork",
        "description": "Call two functions on the same values",
        "glyph": "⊃",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 2,
        "primitive_class": "Planet"
    },
    {
        "name": "bracket",
        "description": "Call two functions on two distinct sets of values",
        "glyph": "⊓",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 2,
        "primitive_class": "Planet"
    },
    {
        "name": "under",
        "description": "Apply a function under another",
        "glyph": "⍜",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 2,
        "primitive_class": "OtherModifier"
    },
    {
        "name": "fill",
        "description": "Set the fill value for a function",
        "glyph": "⬚",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 2,
        "primitive_class": "OtherModifier"
    },
    {
        "name": "level",
        "description": "Apply a function at a different array depth",
        "glyph": "≑",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 2,
        "primitive_class": "IteratingModifier"
    },
    {
        "name": "fold",
        "description": "Apply a function to aggregate at different array depths",
        "glyph": "∧",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 2,
        "primitive_class": "AggregatingModifier"
    },
    {
        "name": "combinate",
        "description": "Apply a function to combinations at array depths",
        "glyph": "◳",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 2,
        "primitive_class": "IteratingModifier"
    },
    {
        "name": "rock",
        "description": "⊂ ∞ to an array",
        "glyph": "⋄",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Ocean"
    },
    {
        "name": "surface",
        "description": "⊂ ¯1 to an array",
        "glyph": "~",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Ocean"
    },
    {
        "name": "deep",
        "description": "⊂ 2 to an array",
        "glyph": "≊",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Ocean"
    },
    {
        "name": "abyss",
        "description": "⊂ 1 to an array",
        "glyph": "≃",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Ocean"
    },
    {
        "name": "seabed",
        "description": "⊂ 0 to an array",
        "glyph": "∸",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Ocean"
    },
    {
        "name": "bind",
        "description": "Syntactically bind two functions",
        "glyph": "'",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 2,
        "primitive_class": "OtherModifier"
    },
    {
        "name": "if",
        "description": "Call one of two functions based on a condition",
        "glyph": "?",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 2,
        "primitive_class": "Control"
    },
    {
        "name": "try",
        "description": "Call a function and catch errors",
        "glyph": "⍣",
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 2,
        "primitive_class": "Control"
    },
    {
        "name": "assert",
        "description": "Throw an error if a condition is not met",
        "glyph": "⍤",
        "count_inputs": 2,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Control"
    },
    {
        "name": "spawn",
        "description": "Spawn a thread",
        "glyph": null,
        "count_inputs": null,
        "count_outputs": 1,
        "count_modifier_inputs": 1,
        "primitive_class": "OtherModifier"
    },
    {
        "name": "wait",
        "description": "Wait for a thread to finish and push its results to the stack",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "send",
        "description": "Send a value to a thread",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "recv",
        "description": "Receive a value from a thread",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "tryrecv",
        "description": "Try to receive a value from a thread",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "break",
        "description": "Break out of a loop",
        "glyph": "⎋",
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Control"
    },
    {
        "name": "random",
        "description": "Generate a random number in the range [0, 1)",
        "glyph": "⚂",
        "count_inputs": 0,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "gen",
        "description": "Generate a random number between 0 and 1 from a seed, as well as the next seed",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 2,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "deal",
        "description": "Randomly reorder the rows of an array with a seed",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "parse",
        "description": "Parse a string as a number",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "regex",
        "description": "Match a regex pattern",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "utf",
        "description": "Convert a string to UTF-8 bytes",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "tag",
        "description": "Generate a unique tag",
        "glyph": null,
        "count_inputs": 0,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "type",
        "description": "Check the type of an array",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "now",
        "description": "Get the current time in seconds",
        "glyph": null,
        "count_inputs": 0,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Misc"
    },
    {
        "name": "eta",
        "description": "The number of radians in a quarter circle",
        "glyph": "η",
        "count_inputs": 0,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Constant"
    },
    {
        "name": "pi",
        "description": "The ratio of a circle's circumference to its diameter",
        "glyph": "π",
        "count_inputs": 0,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Constant"
    },
    {
        "name": "tau",
        "description": "The ratio of a circle's circumference to its radius",
        "glyph": "τ",
        "count_inputs": 0,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Constant"
    },
    {
        "name": "infinity",
        "description": "The biggest number",
        "glyph": "∞",
        "count_inputs": 0,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Constant"
    },
    {
        "name": "trace",
        "description": "Debug print the top value on the stack without popping it",
        "glyph": "⸮",
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Stack"
    },
    {
        "name": "dump",
        "description": "Debug print all the values currently on stack without popping them",
        "glyph": null,
        "count_inputs": 0,
        "count_outputs": 0,
        "count_modifier_inputs": 1,
        "primitive_class": "Stack"
    },
    {
        "name": "&s",
        "description": "Print a nicely formatted representation of a value to stdout",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(StdIO)"
    },
    {
        "name": "&pf",
        "description": "Print a value to stdout",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(StdIO)"
    },
    {
        "name": "&p",
        "description": "Print a value to stdout followed by a newline",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(StdIO)"
    },
    {
        "name": "&sc",
        "description": "Read a line from stdin",
        "glyph": null,
        "count_inputs": 0,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(StdIO)"
    },
    {
        "name": "&ts",
        "description": "Get the size of the terminal",
        "glyph": null,
        "count_inputs": 0,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Env)"
    },
    {
        "name": "&raw",
        "description": "Set the terminal to raw mode",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Env)"
    },
    {
        "name": "&args",
        "description": "Get the command line arguments",
        "glyph": null,
        "count_inputs": 0,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Env)"
    },
    {
        "name": "&var",
        "description": "Get the value of an environment variable",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Env)"
    },
    {
        "name": "&runi",
        "description": "Run a command and wait for it to finish",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Command)"
    },
    {
        "name": "&runc",
        "description": "Run a command and wait for it to finish",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 3,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Command)"
    },
    {
        "name": "&cd",
        "description": "Change the current directory",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Filesystem)"
    },
    {
        "name": "&sl",
        "description": "Sleep for n seconds",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Misc)"
    },
    {
        "name": "&rs",
        "description": "Read at most n bytes from a stream",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Stream)"
    },
    {
        "name": "&rb",
        "description": "Read at most n bytes from a stream",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Stream)"
    },
    {
        "name": "&ru",
        "description": "Read from a stream until a delimiter is reached",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Stream)"
    },
    {
        "name": "&w",
        "description": "Write an array to a stream",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Stream)"
    },
    {
        "name": "&i",
        "description": "Import an item from a file",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Filesystem)"
    },
    {
        "name": "&invk",
        "description": "Invoke a path with the system's default program",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Command)"
    },
    {
        "name": "&cl",
        "description": "Close a stream by its handle",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Stream)"
    },
    {
        "name": "&fo",
        "description": "Open a file and return a handle to it",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Filesystem)"
    },
    {
        "name": "&fc",
        "description": "Create a file and return a handle to it",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Filesystem)"
    },
    {
        "name": "&fde",
        "description": "Delete a file or directory",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Filesystem)"
    },
    {
        "name": "&ftr",
        "description": "Move a file or directory to the trash",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Filesystem)"
    },
    {
        "name": "&fe",
        "description": "Check if a file exists at a path",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Filesystem)"
    },
    {
        "name": "&fld",
        "description": "List the contents of a directory",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Filesystem)"
    },
    {
        "name": "&fif",
        "description": "Check if a path is a file",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Filesystem)"
    },
    {
        "name": "&fras",
        "description": "Read all the contents of a file into a string",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Filesystem)"
    },
    {
        "name": "&frab",
        "description": "Read all the contents of a file into a byte array",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Filesystem)"
    },
    {
        "name": "&fwa",
        "description": "Write the entire contents of an array to a file",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Filesystem)"
    },
    {
        "name": "&imd",
        "description": "Decode an image from a byte array",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Images)"
    },
    {
        "name": "&ime",
        "description": "Encode an image into a byte array with the specified format",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Images)"
    },
    {
        "name": "&ims",
        "description": "Show an image",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Images)"
    },
    {
        "name": "&gifd",
        "description": "Decode a gif from a byte array",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 2,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Gifs)"
    },
    {
        "name": "&gife",
        "description": "Encode a gif into a byte array",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Gifs)"
    },
    {
        "name": "&gifs",
        "description": "Show a gif",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Gifs)"
    },
    {
        "name": "&ad",
        "description": "Decode audio from a byte array",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Audio)"
    },
    {
        "name": "&ae",
        "description": "Encode audio into a byte array",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Audio)"
    },
    {
        "name": "&ap",
        "description": "Play some audio",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Audio)"
    },
    {
        "name": "&asr",
        "description": "Get the sample rate of the audio output backend",
        "glyph": null,
        "count_inputs": 0,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Audio)"
    },
    {
        "name": "&ast",
        "description": "Synthesize and stream audio",
        "glyph": null,
        "count_inputs": 0,
        "count_outputs": 0,
        "count_modifier_inputs": 1,
        "primitive_class": "Sys(Audio)"
    },
    {
        "name": "&tcpl",
        "description": "Create a TCP listener and bind it to an address",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Tcp)"
    },
    {
        "name": "&tcpa",
        "description": "Accept a connection with a TCP listener",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Tcp)"
    },
    {
        "name": "&tcpc",
        "description": "Create a TCP socket and connect it to an address",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Tcp)"
    },
    {
        "name": "&tcpsnb",
        "description": "Set a TCP socket to non-blocking mode",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Tcp)"
    },
    {
        "name": "&tcpsrt",
        "description": "Set the read timeout of a TCP socket in seconds",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Tcp)"
    },
    {
        "name": "&tcpswt",
        "description": "Set the write timeout of a TCP socket in seconds",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 0,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Tcp)"
    },
    {
        "name": "&tcpaddr",
        "description": "Get the connection address of a TCP socket",
        "glyph": null,
        "count_inputs": 1,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Tcp)"
    },
    {
        "name": "&httpsw",
        "description": "Make an HTTP request",
        "glyph": null,
        "count_inputs": 2,
        "count_outputs": 1,
        "count_modifier_inputs": null,
        "primitive_class": "Sys(Tcp)"
    }
];