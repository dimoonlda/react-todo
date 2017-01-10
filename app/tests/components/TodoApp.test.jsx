var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        var todosLengthBeforeAdd = todoApp.state.todos.length;
        todoApp.handleAddTodo('Test');
        expect(todoApp.state.todos.length).toBe(todosLengthBeforeAdd + 1);
    });
});