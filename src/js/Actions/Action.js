// actions.js
export const addTask = (description) => ({
    type: 'ADD_TASK',
    payload: {
      description,
      id: Math.random(), // Generate a unique ID (You should use a better method in a real app).
      isDone: false,
    },
  });
  
  export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: id,
  });
  
  export const editTask = (id, description) => ({
    type: 'EDIT_TASK',
    payload: {
      id,
      description,
    },
  });
  
  export const filterTasks = (filter) => ({
    type: 'FILTER_TASKS',
    payload: filter,
  });
  