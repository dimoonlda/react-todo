var $ = require('jquery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var todos = [];
        try {
            todos = JSON.parse(localStorage.getItem('todos'));
        } catch (e) {
            console.error('Couldn\'t get todos from localStorage', e);
        }
        if ($.isArray(todos)){
            return todos;
        } else {
            console.log('todos isn\'t an array');
            return [];
        }
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        if (searchText) {
            filteredTodos = filteredTodos.filter((todo) => {
                return (todo.text.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
            })
        }

        filteredTodos = filteredTodos.sort((todo1, todo2) => {
            if (!todo1.completed && todo2.completed) {
                return -1;
            } else if (todo1.completed && !todo2.completed) {
                return 1;
            } else {
                return 0;
            }
        });
        return filteredTodos;
    }
};