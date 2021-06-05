import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { TodoContextProvider } from './context'
import configureStore from './store/tasks-store';

configureStore();

ReactDOM.render(
  <React.StrictMode>
    {/* <TodoContextProvider> */}
    <App />
    {/* </TodoContextProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
