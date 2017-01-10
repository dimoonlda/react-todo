var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [{
        id: 1,
        text: 'Learn React'
      }, {
        id: 2,
        text: 'Become Java Senior Developer'
      }, {
        id: 3,
        text: 'Prepare a cup of coffee'
      }, {
        id: 4,
        text: 'Become Spring Boot Guru'
      }]
    }
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
