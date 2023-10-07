# Uiua Keypad

(unofficial)

Note that this extension is not supported by the Uiua language developers (yet 😊). The
language is not stable, so please be patient if this extension is out of date. I
am hoping the official Uiua extension will have it's own keypad in future and
this extension can be deprecated. Note that the wierd focus glitches in previous version of this extension have been fixed. Should work nicely now!

![keypad screenshot](https://github.com/thehappycheese/uiua-keypad/raw/main/resources/screenshot.png)

The icon on the left bar should appear when editing editing a file with the
`.ua` extension, or you can do `Ctrl+Shift+P` and search for `uiua activate keypad`.


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
}))))
```
<details>