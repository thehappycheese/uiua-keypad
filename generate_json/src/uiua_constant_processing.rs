use serde::Serialize;

#[derive(Serialize)]
pub struct ConstantData {
    pub name          : String,
    pub description   : String,
    pub value_type    : String,
    pub value         : String,
    pub count_inputs  : u8,
    pub count_outputs : u8,
}

pub fn get_constants() -> Vec<ConstantData> {
    uiua::constants()
        .iter()
        .map(|constant| ConstantData {
            name: constant.name.to_owned(),
            description: constant.doc.trim().to_owned(),
            value_type: match &constant.value {
                // TODO: just extracting shape for test. Want to convert value to string;
                uiua::Value::Num(_) => "Numeric Array {:?}".to_owned(),
                uiua::Value::Complex(_) => "Complex Array {:?}".to_owned(),
                uiua::Value::Char(_) => "Char Array {:?}".to_owned(),
                uiua::Value::Box(_) => "Box Array {:?}".to_owned(),
                uiua::Value::Byte(_) => "Byte Array {:?}".to_owned(),
            },
            value: match constant.name {
                "e"|"NaN" => format!("{:?}", constant.value),
                _ => "[system specific]".to_owned()
            },
            count_inputs: 0,
            count_outputs: 1,
        })
        .collect()
}
