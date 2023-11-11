// App.js
import React from 'react';
import AddTask from './components/Addtask';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <div>
      <h1>ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
