import React from "react";

const Input = (props) => {
  console.log(props);
  return (
    <div>
      <label htmlFor={props.name}>{props.title}</label>
      <input
        name={props.name}
        type={props.type}
        // required={props.isRequired}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Input;
