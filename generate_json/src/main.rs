mod util;
mod uiua_primitive_processing;
mod uiua_constant_processing;

use util::to_javascript_file;
use uiua_primitive_processing::get_all_primitives;
use uiua_constant_processing::get_constants;


fn main() -> Result<(), Box<dyn std::error::Error>> {
    to_javascript_file(
        "../webview_keypad",
        "constants",
        get_constants()
    )?;
    to_javascript_file(
        "../webview_keypad",
        "primitives",
        get_all_primitives()
    )?;
    Ok(())
}
