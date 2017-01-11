var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with id on click', () => {
        var todoData = {
            id: 11,
            text: 'Test todo',
            completed: false
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} onToggle={spy}/>);
        var todoEl = ReactDOM.findDOMNode(todo);
        TestUtils.Simulate.click(todoEl);
        expect(spy).toHaveBeenCalledWith(todoData.id);
    });
});