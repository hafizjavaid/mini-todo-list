import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import OptionList from "./option";
import * as actionTypes from "../store2/actions/actions";

// useStore
const Form = (props) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("all");
  const options = [
    {
      value: "all",
      text: "All",
    },
    {
      value: "completed",
      text: "Completed",
    },
    {
      value: "uncompleted",
      text: "Uncompleted",
    },
  ];
  useEffect(() => {
    props.onFilterTodos(status);
    // console.log(props.filteredTasks);
  }, [status, props]);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTodo(title);

    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          onChange={(e) => setStatus(e.target.value)}
          className="filter-todo"
        >
          {options.map((option) => {
            return <OptionList key={option.value} option={option} />;
          })}
        </select>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (title) => {
      dispatch({ type: actionTypes.ADD_TODO, title });
    },
    onFilterTodos: (status) => {
      dispatch({ type: actionTypes.FILTER_TODOS, status });
    },
  };
};
export default connect(null, mapDispatchToProps)(Form);
