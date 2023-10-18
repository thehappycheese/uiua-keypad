use serde::Serialize;

use uiua::primitive::{PrimClass, Primitive};

mod util;
use util::to_javascript_file;
mod uiua_primitive_processing;
use uiua_primitive_processing::{get_glyphs, get_all_primitives};
mod uiua_constant_processing;
use uiua_constant_processing::get_constants;


fn main() -> Result<(), Box<dyn std::error::Error>> {
    //to_javascript_file("../webview_keypad", "glyphs", get_glyphs())?;
    to_javascript_file("../webview_keypad", "constants", get_constants())?;

    to_javascript_file("../webview_keypad", "primitives", get_all_primitives())?;
    Ok(())
}
