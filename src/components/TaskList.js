import React from "react";
import Task from "./Task";

import { connect } from "react-redux";

const TaskList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filteredTasks: state.filteredTasks
  };
};

export default connect(mapStateToProps)(TaskList);
