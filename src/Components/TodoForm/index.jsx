import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onHandleSubmit: PropTypes.func,
};

TodoForm.defaultValues = {
  onHandleSubmit: null,
};

function TodoForm(props) {
  const [value, setValue] = useState("");
  const { onHandleSubmit } = props;

  function handleSubmit(e) {
    e.preventDefault();
    if (!onHandleSubmit) {
      return;
    }

    onHandleSubmit({
      title: value,
    });
    setValue("");
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange}></input>
    </form>
  );
}

export default TodoForm;
