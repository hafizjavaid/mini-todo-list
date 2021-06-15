import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store2/actions/actions";

const Task = (props) => {
  console.log(props);

  const toggleTodo = (id) => {
    props.onToggleTodo(id);
  };
  const deleteTodo = (id) => {
    props.onDeleteTodo(id);
  };

  return (
    <div className={`todo ${props.task.checked ? "completed" : ""}`}>
      <li className="todo-item">{props.task.title}</li>
      <button
        className="complete-btn"
        onClick={() => toggleTodo(props.task.id)}
      >
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteTodo(props.task.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteTodo: (id) => {
      dispatch({ type: actionTypes.REMOVE_TODO, id });
    },
    onToggleTodo: (id) => {
      dispatch({ type: actionTypes.TOGGLE_TODO, id });
    },
  };
};
export default connect(null, mapDispatchToProps)(Task);
