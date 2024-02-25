import React from "react";

const FormInput = (
  props
  //     {
  //   label,
  //   id,
  //   name,
  //   value,
  //   onChange,
  //   type = "text",
  //   required = false,
  //     }
) => {
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block mb-2">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="border border-gray-300 p-2 rounded-md w-full"
        required={props.required}
      />
    </div>
  );
};

export default FormInput;
