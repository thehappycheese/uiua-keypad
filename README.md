# Uiua Keypad (unofficial)

> Note: This extension is not supported by the Uiua language developers. The
> language is not stable, so please be patient if this extension is out of date.
> Hopefully this extension can be merged with the official extension, or
> replaced in the future if something better comes along.

As at 2024-10-24, targets `uiua v0.13.0` (aiming at latest version published at https://crates.io/crates/uiua)

![keypad screenshot](https://github.com/thehappycheese/uiua-keypad/raw/main/resources/screenshot.png)

The icon on the left bar should appear when editing editing a file with the
`.ua` extension, or you can do `Ctrl+Shift+P` and search for
`uiua activate keypad`.

## Want to try voice commands instead?

For this extension you have to click glyph buttons with your mouse. Thats hard
work! Check out my video explaining how to use your voice to input Uiua glyphs
😊

https://www.youtube.com/watch?v=-VOxSNyaLTg

[![Uiua-Talon Youtube Intro](https://img.youtube.com/vi/-VOxSNyaLTg/0.jpg)](https://www.youtube.com/watch?v=-VOxSNyaLTg)


## Known Issues

There are still some weird glitches when clicking glyphs related to setting the
focus back to the active editor. It is much improved from previous versions and
should be usable enough.

Inserting into a jupyter notebook will trigger extra glitches, but there is no
kernel yet so I haven't bothered trying to fix that.

## Thanks

Thanks to @thekifake for creating
https://github.com/thekifake/uiua-gen-functions-json which I have copy pasted
into this project


# Notes to Self

<details>

<summary>Clearing the cargo cache</summary>

Because we specify latest
uiua version, Rust Analyzer will sometimes refuse to look at the current version
of uiua. To fix it need to delete old cached versions in somewhere
`~\.cargo\registry\src\...\uiua **`

</details>
