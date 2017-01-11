var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todoData = {
                id: 11,
                text: 'Test todo',
                completed: false
            };
            TodoAPI.setTodos([todoData]);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect([todoData]).toEqual(actualTodos);
        });

        it('should not set invalid todos array', () => {
            var badTodos = {a: 'b'};
            TodoAPI.setTodos(badTodos);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array is in localStorage', () => {
            var todos = [{
                id: 11,
                text: 'Test todo',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        })
    });
});