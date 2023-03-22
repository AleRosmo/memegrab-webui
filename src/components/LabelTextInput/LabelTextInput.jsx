import React from "react";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";

const LabelTextInput = ({
  name,
  id,
  type,
  placeholder,
  onChange,
  children,
}) => {
  return (
    <>
      <Label name={name}>{children}</Label>
      <TextInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </>
  );
};

export default LabelTextInput;
