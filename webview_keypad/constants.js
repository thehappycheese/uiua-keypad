const constants=[
    {
        "name": "e",
        "description": "Euler's constant",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Math",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "i",
        "description": "The imaginary unit",
        "value_type": "UNKNOWN",
        "value": "Complex(..)",
        "class": "Math",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "NaN",
        "description": "IEEE 754-2008's `NaN`",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Math",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "W",
        "description": "The wildcard `NaN` value that equals any other number",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Math",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "MaxInt",
        "description": "The maximum integer that can be represented exactly",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Math",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Os",
        "description": "A string identifying the operating system",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "System",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Family",
        "description": "A string identifying family of the operating system",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "System",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Arch",
        "description": "A string identifying the architecture of the CPU",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "System",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "ExeExt",
        "description": "The executable file extension",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "System",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "DllExt",
        "description": "The file extension for shared libraries",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "System",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Sep",
        "description": "The primary path separator character",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "System",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "ThisFile",
        "description": "The path of the current source file relative to `WorkingDir`",
        "value_type": "UNKNOWN",
        "value": "[this file]",
        "class": "System",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "ThisFileName",
        "description": "The name of the current source file",
        "value_type": "UNKNOWN",
        "value": "[this file name]",
        "class": "System",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "ThisFileDir",
        "description": "The name of the directory containing the current source file",
        "value_type": "UNKNOWN",
        "value": "[this file dir]",
        "class": "System",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "WorkingDir",
        "description": "The compile-time working directory",
        "value_type": "UNKNOWN",
        "value": "[working directory]",
        "class": "System",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "NumProcs",
        "description": "The number of processors available",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "System",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "True",
        "description": "A boolean `true` value for use in `json`",
        "value_type": "UNKNOWN",
        "value": "Byte(..)",
        "class": "External",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "False",
        "description": "A boolean `false` value for use in `json`",
        "value_type": "UNKNOWN",
        "value": "Byte(..)",
        "class": "External",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "NULL",
        "description": "A NULL pointer for use in `&ffi`",
        "value_type": "UNKNOWN",
        "value": "Byte(..)",
        "class": "External",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "HexDigits",
        "description": "The hexadecimal digits",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "Math",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Days",
        "description": "The days of the week",
        "value_type": "UNKNOWN",
        "value": "Box(...)",
        "class": "Time",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Months",
        "description": "The months of the year",
        "value_type": "UNKNOWN",
        "value": "Box(...)",
        "class": "Time",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "MonthDays",
        "description": "The number of days in each month in a non-leap year",
        "value_type": "UNKNOWN",
        "value": "Byte(..)",
        "class": "Time",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "LeapMonthDays",
        "description": "The number of days in each month in a leap year",
        "value_type": "UNKNOWN",
        "value": "Byte(..)",
        "class": "Time",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "White",
        "description": "The color white",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Color",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Black",
        "description": "The color black",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Color",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Red",
        "description": "The color red",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Color",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Orange",
        "description": "The color orange",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Color",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Yellow",
        "description": "The color yellow",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Color",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Green",
        "description": "The color green",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Color",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Cyan",
        "description": "The color cyan",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Color",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Blue",
        "description": "The color blue",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Color",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Purple",
        "description": "The color purple",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Color",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Magenta",
        "description": "The color magenta",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Color",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Planets",
        "description": "The planets of the solar system",
        "value_type": "UNKNOWN",
        "value": "Box(...)",
        "class": "Fun",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Zodiac",
        "description": "The symbols of the zodiac",
        "value_type": "UNKNOWN",
        "value": "Box(...)",
        "class": "Fun",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Suits",
        "description": "The suits of a standard deck of playing cards",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "Fun",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Cards",
        "description": "The ranks of a standard deck of playing cards",
        "value_type": "UNKNOWN",
        "value": "Box(...)",
        "class": "Fun",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Chess",
        "description": "The symbols of the standard chess pieces",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "Fun",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Moon",
        "description": "The phases of the moon",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "Fun",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Skin",
        "description": "Skin color modifiers for emoji",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "Fun",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "People",
        "description": "People emoji",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "Fun",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Hair",
        "description": "Emoji hair components",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "Fun",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Logo",
        "description": "The Uiua logo",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Media",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Lena",
        "description": "Ethically sourced Lena picture\nMorten Rieger Hannemose\n2019\nhttps://mortenhannemose.github.io/lena/",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Media",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Cats",
        "description": "A picture of two cats\n\nTheir names are Murphy and Louie",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Media",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Music",
        "description": "Sample music data",
        "value_type": "UNKNOWN",
        "value": "[music]",
        "class": "Media",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Lorem",
        "description": "Lorem Ipsum text",
        "value_type": "UNKNOWN",
        "value": "Char(..)",
        "class": "Media",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Gay",
        "description": "Gay flag colors",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Lesbian",
        "description": "Lesbian flag colors",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Bi",
        "description": "Bi flag colors",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Trans",
        "description": "Trans flag colors",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Pan",
        "description": "Pan flag colors",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Ace",
        "description": "Ace flag colors",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Aro",
        "description": "Aro flag colors",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "AroAce",
        "description": "Aroace flag colors",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Enby",
        "description": "Enby flag colors",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Fluid",
        "description": "Genderfluid flag colors",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Queer",
        "description": "Genderqueer flag colors",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "Agender",
        "description": "Agender flag colors",
        "value_type": "UNKNOWN",
        "value": "Num(..)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "PrideFlags",
        "description": "All pride flags",
        "value_type": "UNKNOWN",
        "value": "Box(...)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    },
    {
        "name": "PrideFlagNames",
        "description": "All pride flag names",
        "value_type": "UNKNOWN",
        "value": "Box(...)",
        "class": "Flags",
        "count_inputs": 0,
        "count_outputs": 1
    }
];