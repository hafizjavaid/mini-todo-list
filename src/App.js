
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <main className="App">
      <div className="glass">
      <Header />
     <Form />
     <TaskList />
      </div>
    
     <div className="circle1"></div>
    <div className="circle2"></div>
    </main>
  );
}

export default App;
