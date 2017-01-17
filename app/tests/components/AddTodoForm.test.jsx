import React from 'react';
import ReactDOM from 'react-dom';
var expect = require('expect');
import TestUtils from 'react-addons-test-utils';

import {AddTodoForm} from 'AddTodoForm';

describe('AddTodoForm', () => {
    it('should exist', () => {
        expect(AddTodoForm).toExist();
    });

    it('should dispatch ADD_TODO if valid todo text entered', () => {
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
        var addTodoFormEl = ReactDOM.findDOMNode(addTodoForm);

        var testTodo = "My test todo";
        addTodoForm.refs.todoText.value = testTodo;
        TestUtils.Simulate.submit(addTodoFormEl.querySelector('form')[0]);

        expect(spy).toHaveBeenCalledWith({
            type: 'ADD_TODO',
            text: testTodo
        });
    });

    it('shouldn\'t dispatch ADD_TODO if invalid todo text entered', () => {
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
        var addTodoFormEl = ReactDOM.findDOMNode(addTodoForm);

        var testTodo = "";
        addTodoForm.refs.todoText.value = testTodo;
        TestUtils.Simulate.submit(addTodoFormEl.querySelector('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});