
var uuid = require('node-uuid');

module.exports = {
  tasks: [
    {
      _id: uuid(),
      title: 'Learn Webpack',
    },
    {
      _id: uuid(),
      title: 'Learn React',
    },
    {
      _id: uuid(),
      title: 'Get shwifty',
    },
  ],
};
