var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    propTypes: {
        todos: React.PropTypes.array,
        onToggle: React.PropTypes.func
    },
    render: function () {
        var {todos} = this.props;
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                )
            })
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;