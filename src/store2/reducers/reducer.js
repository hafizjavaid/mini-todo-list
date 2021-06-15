import { v4 as uuidv4 } from "uuid";
import * as actionTypes from "../actions/actions";
const initialState = {
  filteredTasks: [],
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTask = {
        title: action.title,
        id: uuidv4(),
        checked: false,
      };

      let updatedTasks = [...state.tasks, newTask];

      return {
        ...state,
        tasks: updatedTasks,
        filteredTasks: updatedTasks,
      };
    case actionTypes.REMOVE_TODO:
      const updatedTodos = state.tasks.filter((todo) => todo.id !== action.id);
      let tempTasks = [...state.tasks];
      tempTasks = [...updatedTodos];
      return {
        ...state,
        tasks: tempTasks,
        filteredTasks: tempTasks,
      };
    case actionTypes.TOGGLE_TODO:
      const todoIndex = state.tasks.findIndex((p) => p.id === action.id);
      const newState = !state.tasks[todoIndex].checked;
      const tempTaskss = [...state.tasks];
      tempTaskss[todoIndex] = {
        ...state.tasks[todoIndex],
        checked: newState,
      };
      return {
        ...state,
        tasks: tempTaskss,
        filteredTasks: tempTaskss,
      };
    case actionTypes.FILTER_TODOS:
      if (action.status === "completed") {
        const updatedTodos = state.tasks.filter(
          (todo) => todo.checked === true
        );
        return {
          ...state,
          filteredTasks: updatedTodos,
        };
      } else if (action.status === "uncompleted") {
        const updatedTodos = state.tasks.filter(
          (todo) => todo.checked === false
        );
        return {
          ...state,
          filteredTasks: updatedTodos,
        };
      } else {
        return {
          ...state,
          filteredTasks: state.tasks,
        };
      }
    default:
      return state;
  }
};

export default reducer;
