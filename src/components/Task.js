import React, { useContext } from "react";
import { TodoContext } from "../context";

const Task = ({ task }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);
  return (
    <div className={`todo ${task.checked ? "completed" : ""}`}>
      <li className="todo-item">{task.title}</li>
      <button className="complete-btn" onClick={() => toggleTodo(task.id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteTodo(task.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Task;
