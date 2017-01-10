var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var AddTodoForm = require('AddTodoForm');

describe('AddTodoForm', () => {
    it('should exist', () => {
        expect(AddTodoForm).toExist();
    });

    it('should call onAddTodo if valid todo text entered', () => {
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>);
        var addTodoFormEl = ReactDOM.findDOMNode(addTodoForm);

        var testTodo = "My test todo";
        addTodoForm.refs.todoText.value = testTodo;
        TestUtils.Simulate.submit(addTodoFormEl.querySelector('form')[0]);

        expect(spy).toHaveBeenCalledWith(testTodo);
    });

    it('shouldn\'t call onAddTodo if invalid todo text entered', () => {
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>);
        var addTodoFormEl = ReactDOM.findDOMNode(addTodoForm);

        var testTodo = "";
        addTodoForm.refs.todoText.value = testTodo;
        TestUtils.Simulate.submit(addTodoFormEl.querySelector('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});