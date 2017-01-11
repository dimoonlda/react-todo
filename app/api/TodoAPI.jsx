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
    }
};