use std::fmt::format;

use serde::Serialize;
use uiua::{ConstantDef, ConstantValue};

#[derive(Serialize)]
pub struct ConstantData {
    pub name          : String,
    pub description   : String,
    pub value_type    : String,
    pub value         : String,
    pub class : String,
    pub count_inputs  : u8,
    pub count_outputs : u8,
}

pub fn get_constants() -> Vec<ConstantData> {
    uiua::CONSTANTS
        .iter()
        .map(|ConstantDef{name, class, value, doc}| ConstantData {
            name: name.to_string(),
            description: doc.trim().to_owned(),
            value_type: "UNKNOWN".to_owned(),
            class:format!("{class:?}"),
            value: match once_cell::sync::Lazy::<ConstantValue>::force(&value) {
                ConstantValue::Static(value)=>match value{
                    uiua::Value::Box    (_)=>"Box(...)".to_owned(),
                    uiua::Value::Byte   (_)=>"Byte(..)".to_owned(),
                    uiua::Value::Char   (_)=>"Char(..)".to_owned(),
                    uiua::Value::Complex(_)=>"Complex(..)".to_owned(),
                    uiua::Value::Num    (_)=>"Num(..)".to_owned(),
                },
                ConstantValue::ThisFile=>"[this file]".to_owned(),
                ConstantValue::ThisFileName=>"[this file name]".to_owned(),
                ConstantValue::ThisFileDir=>"[this file dir]".to_owned(),
                ConstantValue::WorkingDir=>"[working directory]".to_owned(),
                ConstantValue::Music=>"[music]".to_owned(),
            },
            count_inputs: 0,
            count_outputs: 1,
        })
        .collect()
}
