
import React from 'react';
import TaskList from './TaskList.jsx';
import fixtures, { Task } from '../fixtures.js';

function setTitle (_id, title) {
  return (task) => {
    if(task._id === _id) task.title = title;
    return task;
  }
}

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      tasks: fixtures.tasks,
    };
  };

  render () {
    const tasks = this.state.tasks;

    return (
      <div className="app">
        <button className="add-task" onClick={this.addTask}>+</button>
        <TaskList tasks={tasks} onEdit={this.editTask} />
      </div>
    );
  };

  addTask = () => {
    const oldTasks = this.state.tasks;
    const newTask  = new Task('New task');
    const newTasks = [newTask];
    const tasks    = oldTasks.concat(newTasks);
    this.setState({ tasks: tasks });
  };

  editTask = (taskId, title) => {
    const oldTasks = this.state.tasks;
    const tasks = oldTasks.map(setTitle(taskId, title));
    this.setState({ tasks });
  };
};
