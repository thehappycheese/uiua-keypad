

mod util;
use util::pretty_json_string;


use serde::*;
use uiua::primitive::{Primitive, PrimClass};
use uiua::primitive::CONSTANTS;

fn get_prim_class(prim: Primitive) -> &'static str {
    macro_rules! code_font {
        ($class:literal) => {
            concat!("code-font ", $class)
        };
    }

    match prim {
        Primitive::Transpose => code_font!("monadic-function-button trans"),
        prim if prim.class() == PrimClass::Stack && prim.modifier_args().is_none() => {
            code_font!("stack-function-button")
        }
        prim => {
            if let Some(m) = prim.modifier_args() {
                if m == 1 {
                    code_font!("modifier1-button")
                } else {
                    code_font!("modifier2-button")
                }
            } else {
                match prim.args() {
                    Some(0) => code_font!("noadic-function-button"),
                    Some(1) => code_font!("monadic-function-button"),
                    Some(2) => code_font!("dyadic-function-button"),
                    Some(3) => code_font!("triadic-function-button"),
                    _ => code_font!("variadic-function-button"),
                }
            }
        }
    }
}

#[derive(Serialize)]
struct GlyphData {
    name: String,
    glyph: char,
    description: String,
    class: &'static str,
}

#[derive(Serialize)]
struct ConstantData{
    pub name: String,
    pub doc: String,
    pub value: Option<String>,
}

fn to_javascript_file(path:&str,name:&str, data:impl Serialize) -> Result<(), Box<dyn std::error::Error>>{
    let data = pretty_json_string(&data)?;
    let data = format!("const {name}={data};");
    std::fs::write(format!("{path}/{name}.js"), data).unwrap();
    Ok(())
}

fn main() -> Result<(), Box<dyn std::error::Error>> {

    let glyphs:Vec<_> = Primitive::non_deprecated().filter_map(|prim| {
        Some(GlyphData {
            name: prim.names()?.text.into(),
            glyph: prim.names()?.glyph?,
            description: prim
                .doc()
                .map(|doc| doc.short_text())
                .unwrap_or_default()
                .into(),
            class: get_prim_class(prim)
        })
    }).collect();
    to_javascript_file("../webview_keypad", "glyphs", glyphs)?;

    let constants:Vec<_> = CONSTANTS.iter().map(|constant| ConstantData{
        name:constant.name.to_owned(),
        doc:constant.doc.trim().to_owned(),
        value: match &constant.value {
            // TODO: just extracting shape for test. Want to convert value to string;
            uiua::value::Value::Num(arr) =>  Some(format!("Numeric Array [{:?}]", arr.shape())),
            uiua::value::Value::Byte(arr) => Some(format!("Byte Array [{:?}]", arr.shape())),
            uiua::value::Value::Char(arr) => Some(format!("Char Array [{:?}]", arr.shape())),
            uiua::value::Value::Func(arr) => Some(format!("Func Array [{:?}]", arr.shape())),
        }
    }).collect();
    to_javascript_file("../webview_keypad", "constants", constants)?;

    Ok(())
}