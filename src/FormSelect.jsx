// import React from "react";
import Select from "react-select";

// membuat element FormSelect
const FormSelect = (props) => {
  return (
    <div className="mt-2 mb-2">
      <label>{props.label}</label>
      <Select
        id={props.id}
        name={props.id}
        onChange={props.onChange}
        value={props.value}
        options={props.opt}
        className="basic-multi-select"
        classNamePrefix="select"
        required={props.required}
        isMulti
      />
    </div>
  );
};

export default FormSelect;
