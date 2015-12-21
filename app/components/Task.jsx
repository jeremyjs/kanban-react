
import React from 'react';

export default class Task extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isEditing: false };
  };

  render = () => {
    return this.state.isEditing ? this.renderEdit() : this.renderTask();
  };

  renderEdit = () => {
    return <input type="text"
                  autoFocus={true}
                  defaultValue={this.props.title}
                  onBlur={this.saveEdits}
                  onKeyPress={this.checkEnter} />;
  };

  renderTask = () => {
    return <div className="task" onClick={this.edit}>{this.props.title}</div>;
  };

  edit = () => this.setState({ isEditing: true });

  checkEnter = (e) => {
    if(e.key === 'Enter') this.saveEdits(e);
  };

  saveEdits = (e) => {
    this.props.onEdit(e.target.value);
    this.setState({ isEditing: false });
  };
}
