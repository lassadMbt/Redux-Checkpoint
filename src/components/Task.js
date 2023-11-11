import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTask, editTask } from '../js/Actions/Action';

const Task = ({ task, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(editTask(task.id, editedDescription));
    setIsEditing(false);
  };

  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.isDone}
          onChange={handleToggle}
        />
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        ) : (
          <label className="form-check-label">
            {task.description}
          </label>
        )}
      </div>
      <button
        className="btn btn-primary"
        onClick={isEditing ? handleSaveEdit : handleEdit}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

export default connect()(Task);
