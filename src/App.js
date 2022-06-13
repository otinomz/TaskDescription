import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskBar from './components/TaskBar'; 

function App() {
  return (
    <div className="App">
      <TaskList />
      <TaskBar/>
    </div>
  );
}

export default App;
