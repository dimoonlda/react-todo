var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 1,
          text: 'Do something',
          completed: false,
          completedAt: null,
          createdAt: 500
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add new todos', () => {
      var todos = [{
        id: 1,
        text: 'Do something',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }, {
        id: 2,
        text: 'Check mail',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(2);
    });

    it('should toggle todo', () => {
      var todos = [{
        id: '123',
        text: 'Something',
        completed: false,
        createdAt: 123,
        completedAt: undefined
      }];
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates: {
          completed: true,
          completedAt: 123
        }
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(action.updates.completed);
      expect(res[0].completedAt).toEqual(action.updates.completedAt);
    });
  });
});
