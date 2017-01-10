var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
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
  handleAddTodo: function (text) {
    alert(text);
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
