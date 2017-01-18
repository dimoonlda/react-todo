import React from 'react';
import ReactDOM from 'react-dom';
var expect = require('expect');
import TestUtils from 'react-addons-test-utils';

import * as actions from 'actions';
import {AddTodoForm} from 'AddTodoForm';

describe('AddTodoForm', () => {
    it('should exist', () => {
        expect(AddTodoForm).toExist();
    });

    it('should dispatch ADD_TODO if valid todo text entered', () => {
        var testTodo = "My test todo";
        var action = actions.startAddTodo(testTodo);
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
        var addTodoFormEl = ReactDOM.findDOMNode(addTodoForm);


        addTodoForm.refs.todoText.value = testTodo;
        TestUtils.Simulate.submit(addTodoFormEl.querySelector('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
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