const constants=[
    {
        "name": "e",
        "description": "Euler's constant",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "i",
        "description": "The imaginary unit",
        "value_type": "UNKNOWN",
        "value": "Complex(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "NaN",
        "description": "IEEE 754-2008's `NaN`",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "W",
        "description": "The wildcard `NaN` value that equals any other number",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "MaxInt",
        "description": "The maximum integer that can be represented exactly",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Os",
        "description": "A string identifying the operating system",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Family",
        "description": "A string identifying family of the operating system",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Arch",
        "description": "A string identifying the architecture of the CPU",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "ExeExt",
        "description": "The executable file extension",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "DllExt",
        "description": "The file extension for shared libraries",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Sep",
        "description": "The primary path separator character",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "ThisFile",
        "description": "The path of the current source file relative to `WorkingDir`",
        "value_type": "UNKNOWN",
        "value": "[this file]",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "ThisFileName",
        "description": "The name of the current source file",
        "value_type": "UNKNOWN",
        "value": "[this file name]",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "ThisFileDir",
        "description": "The name of the directory containing the current source file",
        "value_type": "UNKNOWN",
        "value": "[this file dir]",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "WorkingDir",
        "description": "The compile-time working directory",
        "value_type": "UNKNOWN",
        "value": "[working directory]",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "NumProcs",
        "description": "The number of processors available",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "True",
        "description": "A boolean `true` value for use in `json`",
        "value_type": "UNKNOWN",
        "value": "Byte(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "False",
        "description": "A boolean `false` value for use in `json`",
        "value_type": "UNKNOWN",
        "value": "Byte(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "NULL",
        "description": "A NULL pointer for use in FFI",
        "value_type": "UNKNOWN",
        "value": "Byte(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "HexDigits",
        "description": "The hexadecimal digits",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Days",
        "description": "The days of the week",
        "value_type": "UNKNOWN",
        "value": "Box(...)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Months",
        "description": "The months of the year",
        "value_type": "UNKNOWN",
        "value": "Box(...)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "MonthDays",
        "description": "The number of days in each month in a non-leap year",
        "value_type": "UNKNOWN",
        "value": "Byte(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "LeapMonthDays",
        "description": "The number of days in each month in a leap year",
        "value_type": "UNKNOWN",
        "value": "Byte(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Planets",
        "description": "The planets of the solar system",
        "value_type": "UNKNOWN",
        "value": "Box(...)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Zodiac",
        "description": "The symbols of the zodiac",
        "value_type": "UNKNOWN",
        "value": "Box(...)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Suits",
        "description": "The suits of a standard deck of playing cards",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Cards",
        "description": "The ranks of a standard deck of playing cards",
        "value_type": "UNKNOWN",
        "value": "Box(...)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Chess",
        "description": "The symbols of the standard chess pieces",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Moon",
        "description": "The phases of the moon",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Skin",
        "description": "Skin color modifiers for emoji",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "People",
        "description": "People emoji",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Hair",
        "description": "Emoji hair components",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Logo",
        "description": "The Uiua logo",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Lena",
        "description": "Ethically sourced Lena picture",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "⍼",
        "description": "",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "count_inputs": 0,
        "count_outputs": 1
    }
];