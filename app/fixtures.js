
var uuid = require('node-uuid');

class Task {
  constructor (title) {
    this._id   = uuid();
    this.title = title;
  }
}

module.exports = {
  Task: Task,
  tasks: [
    new Task('Learn Webpack'),
    new Task('Learn React'),
    new Task('Get shwifty'),
  ],
};
