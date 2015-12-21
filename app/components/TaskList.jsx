
import React from 'react';
import Task from './Task.jsx';

export default class TaskList extends React.Component {
  render () {
    const tasks = this.props.tasks;

    return <ul className="task-list">{tasks.map(this.renderTask, this)}</ul>;
  };

  renderTask (task) {
    const _id = task._id;
    const onEdit = this.props.onEdit.bind(null, task._id);
    return (
      <li className="task-list-item" key={task._id}>
        <Task title={task.title} onEdit={onEdit} />
      </li>
    );
  };
}

