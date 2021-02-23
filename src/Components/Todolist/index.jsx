import React from "react";
import PropTypes from "prop-types";

Todolist.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

Todolist.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function Todolist(props) {
  const { todos, onTodoClick } = props;

  function handleClick(item) {
    if (onTodoClick) {
      onTodoClick(item);
    }
  }

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id} onClick={() => handleClick(item)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default Todolist;
