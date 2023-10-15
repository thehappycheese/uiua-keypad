# Uiua Keypad (unofficial)

Note that this extension is not supported by the Uiua language developers. The
language is not stable, so please be patient if this extension is out of date.

Hopefully this extension can be merged with the official extension, or deprecated in the future.


![keypad screenshot](https://github.com/thehappycheese/uiua-keypad/raw/main/resources/screenshot.png)

The icon on the left bar should appear when editing editing a file with the
`.ua` extension, or you can do `Ctrl+Shift+P` and search for `uiua activate keypad`.

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

## Author's Notes to Self

<details>

<summary>Click to view</summary>

To generate `webview_keypad/glyphs.js` use this snippet in the web console on `https://www.uiua.org/pad`

```js
console.log("const glyphs = "+JSON.stringify(Array.from(document.querySelectorAll(".glyph-button")).map(item=>({
  glyph:item.innerText,
  title:item.getAttribute("data-title"),
  css_class:item.children[0]?Array.from(item.children[0].classList).at(-1):"misc-function-button",
  color:getComputedStyle(item.children[0]?item.children[0]:item).color
})),null,4))
```

</details>
