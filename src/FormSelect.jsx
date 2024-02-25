import React from "react";

const FormSelect = (props) => {
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block mb-2">
        {props.label}
      </label>
      <select
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="border border-gray-300 p-2 rounded-md w-full"
        required={props.required}
        multiple={props.multiple}
      >
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
