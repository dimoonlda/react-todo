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

    describe('filterTodos', () => {
        var testTodos = [{
            id: 1,
            text: 'Test todo 1',
            completed: true
        },{
            id: 2,
            text: 'Test todo 2',
            completed: false
        },{
            id: 3,
            text: 'Test todo 3',
            completed: true
        }];

        it('should return all items when showCompleted is true', () => {
            var actualTodos = TodoAPI.filterTodos(testTodos, true, '');
            expect(actualTodos.length).toEqual(3);
        });
        it('should return only uncompleted items when showCompleted is false', () => {
            var actualTodos = TodoAPI.filterTodos(testTodos, false, '');
            expect(actualTodos.length).toEqual(1);
        });
        it('should sort by completed status', () => {
            var actualTodos = TodoAPI.filterTodos(testTodos, true, '');
            expect(actualTodos[0].completed).toEqual(false);
        });
        it('should filter todos by searchText', () => {
            var actualTodos = TodoAPI.filterTodos(testTodos, true, '3');
            expect(actualTodos.length).toBe(1);
        });
    })
});