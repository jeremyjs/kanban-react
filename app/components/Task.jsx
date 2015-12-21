
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
    return (
      <div className="task">
        <span className="title" onClick={this.edit}>{this.props.title}</span>
        {this.props.onRemove ? this.renderRemove() : null}
      </div>
    );
  };

  renderRemove = () => {
    return <button className="remove" onClick={this.props.onRemove}>x</button>;
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
