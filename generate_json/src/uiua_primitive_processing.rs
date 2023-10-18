use serde::Serialize;
use uiua::primitive::{PrimClass, Primitive};
use uiua::SysOp;


pub struct WrappedPrimClass(PrimClass);

impl Serialize for WrappedPrimClass {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        serializer.serialize_str(format!("{:?}", self.0).as_str())
    }
}


#[derive(Serialize)]
pub struct UiuaPrimitiveDescription {
    name                  : String,
    description           : String,
    glyph                 : Option<char>,
    count_inputs          : Option<u8>,
    count_outputs         : Option<u8>,
    count_modifier_inputs : Option<u8>,
    primitive_class       : Option<WrappedPrimClass>
}

pub fn get_all_primitives()->Vec<UiuaPrimitiveDescription>{
    Primitive::non_deprecated().filter_map(get_primitives).collect()
}

pub fn get_primitives(prim: Primitive) -> Option<UiuaPrimitiveDescription> {
    // stuff with no name seems to generally be hidden builtin inverse functions
    Some(UiuaPrimitiveDescription{
        name                 : prim.names()?.text.into(),
        glyph                : prim.names()?.glyph,
        description          : prim.doc().map(|doc| doc.short_text())?.into(),
        count_inputs         : prim.args(),
        count_outputs        : prim.outputs(),
        count_modifier_inputs: prim.modifier_args(),
        primitive_class      : Some(WrappedPrimClass(prim.class())),
    })
}

///////////////////////////////
/// 
/// Below code is deprecated
/// 
/// ///////////////////////////

#[derive(Serialize)]
pub struct GlyphData {
    name: String,
    glyph: char,
    description: String,
    class: &'static str,
}

pub fn get_glyphs() -> Vec<GlyphData> {
    Primitive::non_deprecated().filter_map(get_glyph).collect()
}

fn get_glyph(prim: Primitive) -> Option<GlyphData> {
    macro_rules! code_font {
        ($class:literal) => {
            concat!("code-font ", $class)
        };
    }

    let class = match prim {
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
    };

    Some(GlyphData {
        name: prim.names()?.text.into(),
        glyph: prim.names()?.glyph?,
        description: prim
            .doc()
            .map(|doc| doc.short_text())
            .unwrap_or_default()
            .into(),
        class,
    })
}