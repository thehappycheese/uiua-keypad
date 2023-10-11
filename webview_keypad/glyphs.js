const glyphs= 
{
  "absolute value": {
    "glyph": "⌵",
    "description": "Get the absolute value of a number",
    "class": "code-font monadic-function-button"
  },
  "add": {
    "glyph": "+",
    "description": "Add values",
    "class": "code-font dyadic-function-button"
  },
  "assert": {
    "glyph": "⍤",
    "description": "Throw an error if a condition is not met",
    "class": "code-font dyadic-function-button"
  },
  "atangent": {
    "glyph": "∠",
    "description": "Take the arctangent of two numbers",
    "class": "code-font dyadic-function-button"
  },
  "bind": {
    "glyph": "'",
    "description": "Compose two functions",
    "class": "code-font modifier2-button"
  },
  "bits": {
    "glyph": "⋯",
    "description": "Encode an array as bits (big-endian)",
    "class": "code-font monadic-function-button"
  },
  "both": {
    "glyph": "∩",
    "description": "Call a function on two sets of values",
    "class": "code-font modifier1-button"
  },
  "box": {
    "glyph": "□",
    "description": "Turn an array into a box",
    "class": "code-font monadic-function-button"
  },
  "bracket": {
    "glyph": "⊓",
    "description": "Call two functions on two distinct sets of values",
    "class": "code-font modifier2-button"
  },
  "break": {
    "glyph": "⎋",
    "description": "Break out of a loop",
    "class": "code-font monadic-function-button"
  },
  "call": {
    "glyph": "!",
    "description": "Call a function",
    "class": "code-font variadic-function-button"
  },
  "ceiling": {
    "glyph": "⌈",
    "description": "Round to the nearest integer towards ∞",
    "class": "code-font monadic-function-button"
  },
  "classify": {
    "glyph": "⊛",
    "description": "Assign a unique index to each unique element in an array",
    "class": "code-font monadic-function-button"
  },
  "couple": {
    "glyph": "⊟",
    "description": "Combine two arrays as rows of a new array",
    "class": "code-font dyadic-function-button"
  },
  "cross": {
    "glyph": "⊠",
    "description": "Apply a function to each combination of rows of two arrays",
    "class": "code-font modifier1-button"
  },
  "deduplicate": {
    "glyph": "⊝",
    "description": "Remove duplicate elements from an array",
    "class": "code-font monadic-function-button"
  },
  "deshape": {
    "glyph": "♭",
    "description": "Make an array 1-dimensional",
    "class": "code-font monadic-function-button"
  },
  "dip": {
    "glyph": "⊙",
    "description": "Temporarily pop the top value off the stack and call a function",
    "class": "code-font modifier1-button"
  },
  "distribute": {
    "glyph": "∺",
    "description": "Apply a function to a fixed value and each row of an array",
    "class": "code-font modifier1-button"
  },
  "divide": {
    "glyph": "÷",
    "description": "Divide values",
    "class": "code-font dyadic-function-button"
  },
  "drop": {
    "glyph": "↘",
    "description": "Drop the first n elements of an array",
    "class": "code-font dyadic-function-button"
  },
  "duplicate": {
    "glyph": ".",
    "description": "Duplicate the top value on the stack",
    "class": "code-font stack-function-button"
  },
  "each": {
    "glyph": "∵",
    "description": "Apply a function to each element of an array or arrays.",
    "class": "code-font modifier1-button"
  },
  "equals": {
    "glyph": "=",
    "description": "Compare for equality",
    "class": "code-font dyadic-function-button"
  },
  "eta": {
    "glyph": "η",
    "description": "The number of radians in a quarter circle",
    "class": "code-font noadic-function-button"
  },
  "fall": {
    "glyph": "⍖",
    "description": "Get the indices into an array if it were sorted descending",
    "class": "code-font monadic-function-button"
  },
  "fill": {
    "glyph": "⬚",
    "description": "Set the fill value for a function",
    "class": "code-font modifier2-button"
  },
  "find": {
    "glyph": "⌕",
    "description": "Find the occurences of one array in another",
    "class": "code-font dyadic-function-button"
  },
  "first": {
    "glyph": "⊢",
    "description": "Get the first row of an array",
    "class": "code-font monadic-function-button"
  },
  "flip": {
    "glyph": "∶",
    "description": "Swap the top two values on the stack",
    "class": "code-font stack-function-button"
  },
  "floor": {
    "glyph": "⌊",
    "description": "Round to the nearest integer towards ¯∞",
    "class": "code-font monadic-function-button"
  },
  "fold": {
    "glyph": "∧",
    "description": "Apply a reducing function to an array with an initial value",
    "class": "code-font modifier1-button"
  },
  "fork": {
    "glyph": "⊃",
    "description": "Call two functions on the same values",
    "class": "code-font modifier2-button"
  },
  "gap": {
    "glyph": "⋅",
    "description": "Discard the top stack value then call a function",
    "class": "code-font modifier1-button"
  },
  "greater or equal": {
    "glyph": "≥",
    "description": "Compare for greater than or equal",
    "class": "code-font dyadic-function-button"
  },
  "greater than": {
    "glyph": ">",
    "description": "Compare for greater than",
    "class": "code-font dyadic-function-button"
  },
  "group": {
    "glyph": "⊕",
    "description": "Group elements of an array into buckets by index",
    "class": "code-font modifier1-button"
  },
  "identity": {
    "glyph": "∘",
    "description": "Do nothing",
    "class": "code-font stack-function-button"
  },
  "if": {
    "glyph": "?",
    "description": "Call one of two functions based on a condition",
    "class": "code-font modifier2-button"
  },
  "indexof": {
    "glyph": "⊗",
    "description": "Find the index of each row of one array in another",
    "class": "code-font dyadic-function-button"
  },
  "infinity": {
    "glyph": "∞",
    "description": "The biggest number",
    "class": "code-font noadic-function-button"
  },
  "invert": {
    "glyph": "⍘",
    "description": "Invert the behavior of a function",
    "class": "code-font modifier1-button"
  },
  "join": {
    "glyph": "⊂",
    "description": "Append two arrays end-to-end",
    "class": "code-font dyadic-function-button"
  },
  "keep": {
    "glyph": "▽",
    "description": "Discard or copy some rows of an array",
    "class": "code-font dyadic-function-button"
  },
  "length": {
    "glyph": "⧻",
    "description": "Get the number of rows in an array",
    "class": "code-font monadic-function-button"
  },
  "less or equal": {
    "glyph": "≤",
    "description": "Compare for less than or equal",
    "class": "code-font dyadic-function-button"
  },
  "less than": {
    "glyph": "<",
    "description": "Compare for less than",
    "class": "code-font dyadic-function-button"
  },
  "level": {
    "glyph": "⍚",
    "description": "Apply a function at a different array depth",
    "class": "code-font modifier2-button"
  },
  "logarithm": {
    "glyph": "ₙ",
    "description": "Get the based logarithm of a number",
    "class": "code-font dyadic-function-button"
  },
  "match": {
    "glyph": "≅",
    "description": "Check if two arrays are exactly the same",
    "class": "code-font dyadic-function-button"
  },
  "maximum": {
    "glyph": "↥",
    "description": "Take the maximum of two arrays",
    "class": "code-font dyadic-function-button"
  },
  "member": {
    "glyph": "∊",
    "description": "Check if each row of one array exists in another",
    "class": "code-font dyadic-function-button"
  },
  "minimum": {
    "glyph": "↧",
    "description": "Take the minimum of two arrays",
    "class": "code-font dyadic-function-button"
  },
  "modulus": {
    "glyph": "◿",
    "description": "Modulo values",
    "class": "code-font dyadic-function-button"
  },
  "multiply": {
    "glyph": "×",
    "description": "Multiply values",
    "class": "code-font dyadic-function-button"
  },
  "negate": {
    "glyph": "¯",
    "description": "Negate a number",
    "class": "code-font monadic-function-button"
  },
  "not": {
    "glyph": "¬",
    "description": "Logical not",
    "class": "code-font monadic-function-button"
  },
  "not equals": {
    "glyph": "≠",
    "description": "Compare for inequality",
    "class": "code-font dyadic-function-button"
  },
  "over": {
    "glyph": ",",
    "description": "Duplicate the second-to-top value to the top of the stack",
    "class": "code-font stack-function-button"
  },
  "partition": {
    "glyph": "⊜",
    "description": "Group elements of an array into buckets by sequential keys",
    "class": "code-font modifier1-button"
  },
  "pi": {
    "glyph": "π",
    "description": "The ratio of a circle's circumference to its diameter",
    "class": "code-font noadic-function-button"
  },
  "pick": {
    "glyph": "⊡",
    "description": "Index a row or elements from an array",
    "class": "code-font dyadic-function-button"
  },
  "pop": {
    "glyph": ";",
    "description": "Discard the top stack value",
    "class": "code-font stack-function-button"
  },
  "power": {
    "glyph": "ⁿ",
    "description": "Raise a value to a power",
    "class": "code-font dyadic-function-button"
  },
  "random": {
    "glyph": "⚂",
    "description": "Generate a random number between 0 and 1",
    "class": "code-font noadic-function-button"
  },
  "range": {
    "glyph": "⇡",
    "description": "Make an array of all natural numbers less than a number",
    "class": "code-font monadic-function-button"
  },
  "recur": {
    "glyph": "↬",
    "description": "Call a function recursively",
    "class": "code-font monadic-function-button"
  },
  "reduce": {
    "glyph": "/",
    "description": "Apply a reducing function to an array",
    "class": "code-font modifier1-button"
  },
  "repeat": {
    "glyph": "⍥",
    "description": "Repeat a function a number of times",
    "class": "code-font modifier1-button"
  },
  "reshape": {
    "glyph": "↯",
    "description": "Change the shape of an array",
    "class": "code-font dyadic-function-button"
  },
  "reverse": {
    "glyph": "⇌",
    "description": "Reverse the rows of an array",
    "class": "code-font monadic-function-button"
  },
  "rise": {
    "glyph": "⍏",
    "description": "Get the indices into an array if it were sorted ascending",
    "class": "code-font monadic-function-button"
  },
  "rotate": {
    "glyph": "↻",
    "description": "Rotate the elements of an array by n",
    "class": "code-font dyadic-function-button"
  },
  "round": {
    "glyph": "⁅",
    "description": "Round to the nearest integer",
    "class": "code-font monadic-function-button"
  },
  "rows": {
    "glyph": "≡",
    "description": "Apply a function to each row of an array or arrays",
    "class": "code-font modifier1-button"
  },
  "scan": {
    "glyph": "\\",
    "description": "Reduce, but keep intermediate values",
    "class": "code-font modifier1-button"
  },
  "select": {
    "glyph": "⊏",
    "description": "Select multiple rows from an array",
    "class": "code-font dyadic-function-button"
  },
  "shape": {
    "glyph": "△",
    "description": "Get the dimensions of an array",
    "class": "code-font monadic-function-button"
  },
  "sign": {
    "glyph": "±",
    "description": "Numerical sign (1, ¯1, or 0)",
    "class": "code-font monadic-function-button"
  },
  "sine": {
    "glyph": "○",
    "description": "Get the sine of a number",
    "class": "code-font monadic-function-button"
  },
  "sqrt": {
    "glyph": "√",
    "description": "Take the square root of a number",
    "class": "code-font monadic-function-button"
  },
  "subtract": {
    "glyph": "-",
    "description": "Subtract values",
    "class": "code-font dyadic-function-button"
  },
  "table": {
    "glyph": "⊞",
    "description": "Apply a function to each combination of elements of two arrays",
    "class": "code-font modifier1-button"
  },
  "take": {
    "glyph": "↙",
    "description": "Take the first n elements of an array",
    "class": "code-font dyadic-function-button"
  },
  "tau": {
    "glyph": "τ",
    "description": "The ratio of a circle's circumference to its radius",
    "class": "code-font noadic-function-button"
  },
  "trace": {
    "glyph": "~",
    "description": "Debug print the top value on the stack without popping it",
    "class": "code-font stack-function-button"
  },
  "transpose": {
    "glyph": "⍉",
    "description": "Rotate the shape of an array",
    "class": "code-font monadic-function-button trans"
  },
  "try": {
    "glyph": "⍣",
    "description": "Call a function and catch errors",
    "class": "code-font modifier2-button"
  },
  "unbox": {
    "glyph": "⊔",
    "description": "Take an array out of a box",
    "class": "code-font monadic-function-button"
  },
  "under": {
    "glyph": "⍜",
    "description": "Apply a function under another",
    "class": "code-font modifier2-button"
  },
  "where": {
    "glyph": "⊚",
    "description": "Get indices where array values are not equal to zero",
    "class": "code-font monadic-function-button"
  },
  "windows": {
    "glyph": "◫",
    "description": "The n-wise windows of an array",
    "class": "code-font dyadic-function-button"
  }
}