
import React from 'react';
import TaskList from './TaskList.jsx';
import fixtures, { Task } from '../fixtures.js';

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
        <button className="add-note" onClick={this.addNote}>+</button>
        <TaskList tasks={tasks}/>
      </div>
    );
  };

  addNote = () => {
    const oldTasks = this.state.tasks;
    const newTask  = new Task('New task');
    const newTasks = [newTask];
    const tasks    = oldTasks.concat(newTasks);
    this.setState({ tasks: tasks });
  };
};
