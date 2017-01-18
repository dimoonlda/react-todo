import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var AddTodoForm = React.createClass({
    onSubmit: function (event) {
        var {dispatch} = this.props;
        event.preventDefault();
        var todoText = this.refs.todoText;
        if (todoText.value) {
            dispatch(actions.startAddTodo(todoText.value));
            todoText.value = '';
        } else {
            todoText.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.onSubmit}>
                    <input ref="todoText" type="text" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
});

export default connect()(AddTodoForm);