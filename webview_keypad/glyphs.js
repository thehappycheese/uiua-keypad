const glyphs= 
[
  {
    "name": "duplicate",
    "glyph": ".",
    "description": "Duplicate the top value on the stack",
    "class": "code-font stack-function-button"
  },
  {
    "name": "over",
    "glyph": ",",
    "description": "Duplicate the second-to-top value to the top of the stack",
    "class": "code-font stack-function-button"
  },
  {
    "name": "flip",
    "glyph": "∶",
    "description": "Swap the top two values on the stack",
    "class": "code-font stack-function-button"
  },
  {
    "name": "pop",
    "glyph": ";",
    "description": "Discard the top stack value",
    "class": "code-font stack-function-button"
  },
  {
    "name": "identity",
    "glyph": "∘",
    "description": "Do nothing",
    "class": "code-font stack-function-button"
  },
  {
    "name": "not",
    "glyph": "¬",
    "description": "Logical not",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "sign",
    "glyph": "±",
    "description": "Numerical sign (1, ¯1, or 0)",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "negate",
    "glyph": "¯",
    "description": "Negate a number",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "absolute value",
    "glyph": "⌵",
    "description": "Get the absolute value of a number",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "sqrt",
    "glyph": "√",
    "description": "Take the square root of a number",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "sine",
    "glyph": "○",
    "description": "Get the sine of a number",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "floor",
    "glyph": "⌊",
    "description": "Round to the nearest integer towards ¯∞",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "ceiling",
    "glyph": "⌈",
    "description": "Round to the nearest integer towards ∞",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "round",
    "glyph": "⁅",
    "description": "Round to the nearest integer",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "equals",
    "glyph": "=",
    "description": "Compare for equality",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "not equals",
    "glyph": "≠",
    "description": "Compare for inequality",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "less than",
    "glyph": "<",
    "description": "Compare for less than",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "less or equal",
    "glyph": "≤",
    "description": "Compare for less than or equal",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "greater than",
    "glyph": ">",
    "description": "Compare for greater than",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "greater or equal",
    "glyph": "≥",
    "description": "Compare for greater than or equal",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "add",
    "glyph": "+",
    "description": "Add values",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "subtract",
    "glyph": "-",
    "description": "Subtract values",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "multiply",
    "glyph": "×",
    "description": "Multiply values",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "divide",
    "glyph": "÷",
    "description": "Divide values",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "modulus",
    "glyph": "◿",
    "description": "Modulo values",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "power",
    "glyph": "ⁿ",
    "description": "Raise a value to a power",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "logarithm",
    "glyph": "ₙ",
    "description": "Get the based logarithm of a number",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "minimum",
    "glyph": "↧",
    "description": "Take the minimum of two arrays",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "maximum",
    "glyph": "↥",
    "description": "Take the maximum of two arrays",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "atangent",
    "glyph": "∠",
    "description": "Take the arctangent of two numbers",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "length",
    "glyph": "⧻",
    "description": "Get the number of rows in an array",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "shape",
    "glyph": "△",
    "description": "Get the dimensions of an array",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "range",
    "glyph": "⇡",
    "description": "Make an array of all natural numbers less than a number",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "first",
    "glyph": "⊢",
    "description": "Get the first row of an array",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "reverse",
    "glyph": "⇌",
    "description": "Reverse the rows of an array",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "deshape",
    "glyph": "♭",
    "description": "Make an array 1-dimensional",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "bits",
    "glyph": "⋯",
    "description": "Encode an array as bits (big-endian)",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "transpose",
    "glyph": "⍉",
    "description": "Rotate the shape of an array",
    "class": "code-font monadic-function-button trans"
  },
  {
    "name": "rise",
    "glyph": "⍏",
    "description": "Get the indices into an array if it were sorted ascending",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "fall",
    "glyph": "⍖",
    "description": "Get the indices into an array if it were sorted descending",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "where",
    "glyph": "⊚",
    "description": "Get indices where array values are not equal to zero",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "classify",
    "glyph": "⊛",
    "description": "Assign a unique index to each unique element in an array",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "deduplicate",
    "glyph": "⊝",
    "description": "Remove duplicate elements from an array",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "box",
    "glyph": "□",
    "description": "Turn an array into a box",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "unbox",
    "glyph": "⊔",
    "description": "Take an array out of a box",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "match",
    "glyph": "≅",
    "description": "Check if two arrays are exactly the same",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "couple",
    "glyph": "⊟",
    "description": "Combine two arrays as rows of a new array",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "join",
    "glyph": "⊂",
    "description": "Append two arrays end-to-end",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "select",
    "glyph": "⊏",
    "description": "Select multiple rows from an array",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "pick",
    "glyph": "⊡",
    "description": "Index a row or elements from an array",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "reshape",
    "glyph": "↯",
    "description": "Change the shape of an array",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "take",
    "glyph": "↙",
    "description": "Take the first n elements of an array",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "drop",
    "glyph": "↘",
    "description": "Drop the first n elements of an array",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "rotate",
    "glyph": "↻",
    "description": "Rotate the elements of an array by n",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "windows",
    "glyph": "◫",
    "description": "The n-wise windows of an array",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "keep",
    "glyph": "▽",
    "description": "Discard or copy some rows of an array",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "find",
    "glyph": "⌕",
    "description": "Find the occurences of one array in another",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "member",
    "glyph": "∊",
    "description": "Check if each row of one array exists in another",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "indexof",
    "glyph": "⊗",
    "description": "Find the index of each row of one array in another",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "reduce",
    "glyph": "/",
    "description": "Apply a reducing function to an array",
    "class": "code-font modifier1-button"
  },
  {
    "name": "fold",
    "glyph": "∧",
    "description": "Apply a reducing function to an array with an initial value",
    "class": "code-font modifier1-button"
  },
  {
    "name": "scan",
    "glyph": "\\",
    "description": "Reduce, but keep intermediate values",
    "class": "code-font modifier1-button"
  },
  {
    "name": "each",
    "glyph": "∵",
    "description": "Apply a function to each element of an array or arrays.",
    "class": "code-font modifier1-button"
  },
  {
    "name": "rows",
    "glyph": "≡",
    "description": "Apply a function to each row of an array or arrays",
    "class": "code-font modifier1-button"
  },
  {
    "name": "distribute",
    "glyph": "∺",
    "description": "Apply a function to a fixed value and each row of an array",
    "class": "code-font modifier1-button"
  },
  {
    "name": "table",
    "glyph": "⊞",
    "description": "Apply a function to each combination of elements of two arrays",
    "class": "code-font modifier1-button"
  },
  {
    "name": "cross",
    "glyph": "⊠",
    "description": "Apply a function to each combination of rows of two arrays",
    "class": "code-font modifier1-button"
  },
  {
    "name": "repeat",
    "glyph": "⍥",
    "description": "Repeat a function a number of times",
    "class": "code-font modifier1-button"
  },
  {
    "name": "group",
    "glyph": "⊕",
    "description": "Group elements of an array into buckets by index",
    "class": "code-font modifier1-button"
  },
  {
    "name": "partition",
    "glyph": "⊜",
    "description": "Group elements of an array into buckets by sequential keys",
    "class": "code-font modifier1-button"
  },
  {
    "name": "both",
    "glyph": "∩",
    "description": "Call a function on two sets of values",
    "class": "code-font modifier1-button"
  },
  {
    "name": "bracket",
    "glyph": "⊓",
    "description": "Call two functions on two distinct sets of values",
    "class": "code-font modifier2-button"
  },
  {
    "name": "fork",
    "glyph": "⊃",
    "description": "Call two functions on the same values",
    "class": "code-font modifier2-button"
  },
  {
    "name": "dip",
    "glyph": "⊙",
    "description": "Temporarily pop the top value off the stack and call a function",
    "class": "code-font modifier1-button"
  },
  {
    "name": "gap",
    "glyph": "⋅",
    "description": "Discard the top stack value then call a function",
    "class": "code-font modifier1-button"
  },
  {
    "name": "invert",
    "glyph": "⍘",
    "description": "Invert the behavior of a function",
    "class": "code-font modifier1-button"
  },
  {
    "name": "under",
    "glyph": "⍜",
    "description": "Apply a function under another",
    "class": "code-font modifier2-button"
  },
  {
    "name": "level",
    "glyph": "⍚",
    "description": "Apply a function at a different array depth",
    "class": "code-font modifier2-button"
  },
  {
    "name": "fill",
    "glyph": "⬚",
    "description": "Set the fill value for a function",
    "class": "code-font modifier2-button"
  },
  {
    "name": "bind",
    "glyph": "'",
    "description": "Compose two functions",
    "class": "code-font modifier2-button"
  },
  {
    "name": "if",
    "glyph": "?",
    "description": "Call one of two functions based on a condition",
    "class": "code-font modifier2-button"
  },
  {
    "name": "try",
    "glyph": "⍣",
    "description": "Call a function and catch errors",
    "class": "code-font modifier2-button"
  },
  {
    "name": "assert",
    "glyph": "⍤",
    "description": "Throw an error if a condition is not met",
    "class": "code-font dyadic-function-button"
  },
  {
    "name": "call",
    "glyph": "!",
    "description": "Call a function",
    "class": "code-font variadic-function-button"
  },
  {
    "name": "break",
    "glyph": "⎋",
    "description": "Break out of a loop",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "recur",
    "glyph": "↬",
    "description": "Call a function recursively",
    "class": "code-font monadic-function-button"
  },
  {
    "name": "random",
    "glyph": "⚂",
    "description": "Generate a random number between 0 and 1",
    "class": "code-font noadic-function-button"
  },
  {
    "name": "eta",
    "glyph": "η",
    "description": "The number of radians in a quarter circle",
    "class": "code-font noadic-function-button"
  },
  {
    "name": "pi",
    "glyph": "π",
    "description": "The ratio of a circle's circumference to its diameter",
    "class": "code-font noadic-function-button"
  },
  {
    "name": "tau",
    "glyph": "τ",
    "description": "The ratio of a circle's circumference to its radius",
    "class": "code-font noadic-function-button"
  },
  {
    "name": "infinity",
    "glyph": "∞",
    "description": "The biggest number",
    "class": "code-font noadic-function-button"
  },
  {
    "name": "trace",
    "glyph": "~",
    "description": "Debug print the top value on the stack without popping it",
    "class": "code-font stack-function-button"
  }
]