import { initStore } from "./store";
import { v4 as uuidv4 } from "uuid";
const configureStore = () => {
  const actions = {
    TOGGLE_TODO: (currState, todoId) => {
      const todoIndex = currState.tasks.findIndex((p) => p.id === todoId);
      const newState = !currState.tasks[todoIndex].checked;
      const updatedTasks = [...currState.tasks];
      updatedTasks[todoIndex] = {
        ...currState.tasks[todoIndex],
        checked: newState,
      };

      return {
        tasks: updatedTasks,
      };
    },
    REMOVE_TODO: (currState, todoId) => {
      const updatedTodos = currState.tasks.filter((todo) => todo.id !== todoId);
      let updatedTasks = [...currState.tasks];
      updatedTasks = [...updatedTodos];

      return {
        tasks: updatedTasks,
      };
    },
    ADD_TODO: (currState, title) => {
      const newTask = {
        title,
        id: uuidv4(),
        checked: false,
      };
      let updatedTasks = [...currState.tasks, newTask];
      return {
        tasks: updatedTasks,
      };
    },
    FILTER_TODOS: (currState, status) => {
        if (status === "completed") {
            const updatedTodos = currState.tasks.filter((todo) => todo.checked === true);
            return{
              filteredTasks: updatedTodos,
            }
          } else if (status === "uncompleted") {
            const updatedTodos = currState.tasks.filter((todo) => todo.checked === false);
            return{
              filteredTasks: updatedTodos,
            }
          } else {
            return{
              filteredTasks: currState.tasks,
            }
          }
      }
   
  };

  initStore(actions, {
    tasks: [
      {
        checked: false,
        id: uuidv4(),
        title: "t2",
      },
      {
        checked: true,
        id: uuidv4(),
        title: "t2",
      },
    ],
    filteredTasks: [
      {
        checked: false,
        id: uuidv4(),
        title: "t2",
      },
      {
        checked: true,
        id: uuidv4(),
        title: "t2",
      },
    ]
  });
};

export default configureStore;
