import React, {  } from "react";
import Task from "./Task";
import { useStore } from '../store/store';

const TaskList = () => {

  const state = useStore()[0];
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          state.filteredTasks.map(task=>{
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
