var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var moment = require('moment');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
           todos: []
        });
        var todosLengthBeforeAdd = todoApp.state.todos.length;
        todoApp.handleAddTodo('Test');
        expect(todoApp.state.todos.length).toBe(todosLengthBeforeAdd + 1);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'Test todo',
            completed: false,
            completedAt: undefined,
            createdAt: 0
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todoData]
        });
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(todoData.id);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should set completedAt to undefined when handleToggle called and toggle completed value from true to false ', () => {
        var todoData = {
            id: 11,
            text: 'Test todo',
            completed: true,
            completedAt: moment().unix(),
            createdAt: 0
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todoData]
        });
        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToggle(todoData.id);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
});