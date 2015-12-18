
import React from 'react';
import TaskList from './TaskList.jsx';
import { tasks } from '../fixtures.js';

export default class App extends React.Component {
  render () {
    return (
      <div className="app">
        <TaskList tasks={tasks}/>
      </div>
    );
  }
};
