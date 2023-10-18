use serde::Serialize;
use serde_json::ser::PrettyFormatter;

pub fn pretty_json_string(thing_to_serialize:& impl Serialize) -> Result<String, Box<dyn std::error::Error>>{
    let mut writer = Vec::new();
    let mut pretty_json_serializer = serde_json::Serializer::with_formatter(
        &mut writer,
        PrettyFormatter::with_indent(b"    ")
    );
    thing_to_serialize.serialize(&mut pretty_json_serializer)?;
    Ok(String::from_utf8(writer).unwrap())
}


pub fn to_javascript_file(path:&str,name:&str, data:impl Serialize) -> Result<(), Box<dyn std::error::Error>>{
    let data = pretty_json_string(&data)?;
    let data = format!("const {name}={data};");
    std::fs::write(format!("{path}/{name}.js"), data).unwrap();
    Ok(())
}