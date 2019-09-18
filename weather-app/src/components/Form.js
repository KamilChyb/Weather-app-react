import React from "react";

const Form = props => {
  return (
    // <form onSubmit={props.submit}>
    <form>
      <input
        type="text"
        value={props.value}
        placeholder={"Enter the city name"}
        onChange={props.change}
      />
      {/* <button>Search City</button> */}
    </form>
  );
};

export default Form;
