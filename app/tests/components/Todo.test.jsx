var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
import * as actions from 'actions';

var {Todo} = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should dispatch UPDATE_TODO action on click', () => {
        var todoData = {
            id: 11,
            text: 'Test todo',
            completed: false
        };
        var action = actions.startToggleTodo(todoData.id, !todoData.completed);
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} dispatch={spy}/>);
        var todoEl = ReactDOM.findDOMNode(todo);
        TestUtils.Simulate.click(todoEl);
        expect(spy).toHaveBeenCalledWith(action);
    });
});