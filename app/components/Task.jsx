
import React from 'react';

export default class Task extends React.Component {
  render () {
    return <div className="task">{this.props.title}</div>;
  };
}
