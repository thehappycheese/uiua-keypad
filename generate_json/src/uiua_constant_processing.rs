use serde::Serialize;
use uiua::primitive::CONSTANTS;

#[derive(Serialize)]
pub struct ConstantData {
    pub name: String,
    pub description: String,
    pub value: Option<String>,
}

pub fn get_constants() -> Vec<ConstantData>{
    CONSTANTS
        .iter()
        .map(|constant| ConstantData {
            name: constant.name.to_owned(),
            description: constant.doc.trim().to_owned(),
            value: match &constant.value {
                // TODO: just extracting shape for test. Want to convert value to string;
                uiua::value::Value::Num(arr) => Some(format!("Numeric Array [{:?}]", arr.shape())),
                uiua::value::Value::Byte(arr) => Some(format!("Byte Array [{:?}]", arr.shape())),
                uiua::value::Value::Char(arr) => Some(format!("Char Array [{:?}]", arr.shape())),
                uiua::value::Value::Func(arr) => Some(format!("Func Array [{:?}]", arr.shape())),
            },
        })
        .collect()
}
