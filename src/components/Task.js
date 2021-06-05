import React, {  } from "react";

import { useStore } from '../store/store';

const Task = ({ task }) => {
 
  const dispatch = useStore(false)[1];

  const toggleTodo = id => {

    dispatch('TOGGLE_TODO', id);

  }
  const deleteTodo = id => {

    dispatch('REMOVE_TODO', id);

  }
  
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
