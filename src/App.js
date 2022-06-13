import React, { Fragment } from 'react';
import TaskList from './components/TaskList';
import TaskBar from './components/TaskBar'; 

function App() {
  return (
    <Fragment>
      <TaskList />
      <TaskBar/>
    </Fragment>
  );
}

export default App;
