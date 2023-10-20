use serde::Serialize;
use uiua::primitive::Primitive;

#[derive(Serialize)]
pub struct UiuaPrimitiveDescription {
    name: String,
    description: String,
    glyph: Option<char>,
    count_inputs: Option<u8>,
    count_outputs: Option<u8>,
    count_modifier_inputs: Option<u8>,
    primitive_class: Option<String>,
}

pub fn get_all_primitives() -> Vec<UiuaPrimitiveDescription> {
    Primitive::non_deprecated()
        .filter_map(|prim: Primitive| {
            Some(UiuaPrimitiveDescription {
                name: prim.names()?.text.into(),
                glyph: prim.names()?.glyph,
                description: prim.doc().map(|doc| doc.short_text())?.into(),
                count_inputs: prim.args(),
                count_outputs: prim.outputs(),
                count_modifier_inputs: prim.modifier_args(),
                primitive_class: Some(format!("{:?}", prim.class())),
            })
        })
        .collect()
}
