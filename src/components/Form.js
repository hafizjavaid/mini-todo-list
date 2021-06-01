import React, { useState, useContext } from "react";

import { TodoContext } from '../context'
import OptionList from './option';

const Form = () => {

  const { addTask, setStatus } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const options = [
    {
      value: 'all',
      text: 'All'
    },
    {
      value: 'completed',
      text: 'Completed'
    },
    {
      value: 'uncompleted',
      text: 'Uncompleted'
    },
  ]
  // const options = ['all', 'completed', 'uncompleted']

  const handleSubmit = (e) =>{
    e.preventDefault();
    addTask(title);
    setTitle('');
  } 
  return (
    <form onSubmit={handleSubmit}>
      <input value={title} required onChange={(e)=> setTitle(e.target.value)} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" onChange={(e)=> setStatus(e.target.value)} className="filter-todo">

           {
             options.map(option=>{
               return(
                <OptionList key={option.value} option={option} />
               )
             })
           }
        </select>
      </div>
    </form>
  );
};

export default Form;
