use serde::Serialize;
use uiua::Primitive;

#[derive(Serialize)]
pub struct UiuaPrimitiveDescription {
    name: String,
    description: String,
    glyph: Option<char>,
    count_inputs: Option<usize>,
    count_outputs: Option<usize>,
    count_modifier_inputs: Option<usize>,
    primitive_class: Option<String>,
    experimental:bool,
    deprecated:bool,
}

pub fn get_all_primitives() -> Vec<UiuaPrimitiveDescription> {
    
    Primitive::all()
        .map(|prim| UiuaPrimitiveDescription {
            name: prim.names().text.into(),
            glyph: prim.names().glyph,
            description: prim.doc().short_text().into_owned(),
            count_inputs: prim.args(),
            count_outputs: prim.outputs(),
            count_modifier_inputs: prim.modifier_args(),
            primitive_class: Some(format!("{:?}", prim.class())),
            experimental: prim.is_experimental(),
            deprecated: prim.is_deprecated(),
        })
        .collect()
}

