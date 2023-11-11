import React from 'react';
import { connect } from 'react-redux';
import { filterTasks } from '../js/Actions/Action';
import Task from './Task';

const ListTask = ({ tasks, filter, dispatch }) => {
  const filteredTasks =
    filter === 'done'
      ? tasks.filter((task) => task.isDone)
      : filter === 'notDone'
      ? tasks.filter((task) => !task.isDone)
      : tasks;

  return (
    <div>
      <div className="btn-group">
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(filterTasks('all'))}
        >
          All
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(filterTasks('done'))}
        >
          Done
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(filterTasks('notDone'))}
        >
          Not Done
        </button>
      </div>
      <ul className="list-group">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.filter,
});

export default connect(mapStateToProps)(ListTask);
