# Uiua Keypad

(unofficial)

This extension has a know bug when multiple editor windows are open: As a workaround please have only one text editor open and the keypad. This way it doesn't activate / insert into a random editor every time you click on the keypad.

![keypad screenshot](https://github.com/thehappycheese/uiua-keypad/raw/main/resources/screenshot.png)

The icon on the left bar should appear when editing editing a file with the
`.ua` extension, or you can do Ctrl+Shift+P `uiua activate keypad`.

The bug mentioned above happens because I was forced to use
`command:workbench.action.previousEditor` to switch focus back to your current
editor every time you click a key. Please raise an issue / pull request on
github if you can think of a way to fix it please let me know!

Note that this extension is not made by the Uiua language developers. The language is not stable, so please be patient if this extension is out of date. I am hoping the official Uiua extension will have it's own keypad in future and this extension can be deprecated.

## Notes

To generate `webview_keypad/glyphs.js` use this snippet in the web console on `https://www.uiua.org/pad`

```js
console.log("const glyphs = "+JSON.stringify(Array.from(document.querySelectorAll(".glyph-button")).map(item=>({
  glyph:item.innerText,
  title:item.getAttribute("data-title"),
  css_class:item.children[0]?Array.from(item.children[0].classList).at(-1):"misc-function-button",
  color:getComputedStyle(item.children[0]?item.children[0]:item).color
}))))
```