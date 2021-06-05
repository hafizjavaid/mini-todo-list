import React, { useState, useEffect } from "react";

import OptionList from "./option";
import { useStore } from "../store/store";

// useStore
const Form = () => {
  const dispatch = useStore(false)[1];
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("all");

  console.log(status);
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
    dispatch("FILTER_TODOS", status);
  }, [status, dispatch]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch("ADD_TODO", title);
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

export default Form;
