
import React from 'react';
import Task from './Task.jsx';

export default class TaskList extends React.Component {
  render () {
    const tasks = this.props.tasks;

    return <ul>{tasks.map(this.renderTask)}</ul>;
  };

  renderTask (task) {
    return (
      <li key={task._id}>
        <Task title={task.title} />
      </li>
    );
  };
}

