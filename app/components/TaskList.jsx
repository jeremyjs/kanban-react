
import React from 'react';
import Task from './Task.jsx';

export default class TaskList extends React.Component {
  render () {
    const tasks = this.props.tasks;

    return <ul className="task-list">{tasks.map(this.renderTask)}</ul>;
  };

  renderTask (task) {
    return (
      <li className="task-list-item" key={task._id}>
        <Task title={task.title} />
      </li>
    );
  };
}

