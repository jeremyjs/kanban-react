
import React from 'react';
import TaskList from './TaskList.jsx';
import { tasks } from '../fixtures.js';

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      tasks: tasks,
    };
  };

  render () {
    const tasks = this.state.tasks;

    return (
      <div className="app">
        <TaskList tasks={tasks}/>
      </div>
    );
  };
};
