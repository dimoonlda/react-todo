var React = require('react');

var AddTodoForm = React.createClass({
    propTypes: {
        onAddTodo: React.PropTypes.func.isRequired
    },
    onSubmit: function (event) {
        event.preventDefault();
        var todoText = this.refs.todoText;
        if (todoText.value) {
            this.props.onAddTodo(todoText.value);
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

module.exports = AddTodoForm;