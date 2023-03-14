import React from "react";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";


const LabelTextInput = ({ name, id, type, placeholder, children }) => {
  return (
    <>
      <Label name={name}>{children}</Label>
      <TextInput id={id} name={name} type={type} placeholder={placeholder}/>
    </>
  );
};

export default LabelTextInput;
