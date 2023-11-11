import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../js/Actions/Action';

const AddTask = ({ dispatch }) => {
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (description.trim() !== '') {
      dispatch(addTask(description));
      setDescription('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default connect()(AddTask);
