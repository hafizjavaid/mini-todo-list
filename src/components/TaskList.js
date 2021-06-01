import React, { useContext } from "react";
import Task from "./Task";
import { TodoContext } from '../context'

const TaskList = () => {

  const { tasks } = useContext(TodoContext);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          tasks.map(task=>{
            return(
              <Task key={task.id} task={task} />
            )
          })
        }
          
      </ul>
    </div>
  );
};

export default TaskList;
