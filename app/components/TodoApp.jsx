var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [{
        id: uuid(),
        text: 'Learn React'
      }, {
        id: uuid(),
        text: 'Become Java Senior Developer'
      }, {
        id: uuid(),
        text: 'Prepare a cup of coffee'
      }, {
        id: uuid(),
        text: 'Become Spring Boot Guru'
      }]
    }
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
          ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
