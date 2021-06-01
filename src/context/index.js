import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

function TodoContextProvider({ children }) {

  const initialState =  JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState(initialState);

  useEffect(() => {
    filterHandler();
     //   Sav to Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // eslint-disable-next-line
  }, [tasks, status]);




  // Add Task
  const addTask = (title) => {
    setTasks([
      ...tasks,
      {
        title,
        id: uuidv4(),
        checked: false,
      },
    ]);
  };

  // ToggleTodo
  const toggleTodo = (todoId) => {
    const updatedTodos = tasks.map((todo) => {
      if (todo.id === todoId) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTasks([...updatedTodos]);
  };

  //   Delete Todo
  const deleteTodo = (todoId) => {
    const updatedTodos = tasks.filter((todo) => todo.id !== todoId);
    setTasks([...updatedTodos]);
  };

  const filterHandler = () => {
    if (status === "completed") {
      const updatedTodos = tasks.filter((todo) => todo.checked === true);
      setFilterTodos([...updatedTodos]);
      return;
    } else if (status === "uncompleted") {
      const updatedTodos = tasks.filter((todo) => todo.checked === false);
      setFilterTodos([...updatedTodos]);
      return;
    } else {
      setFilterTodos([...tasks]);
      return;
    }
  };

  return (
    <TodoContext.Provider
      value={{
        tasks: filterTodos,
        addTask,
        toggleTodo,
        deleteTodo,
        setStatus,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoContextProvider };
