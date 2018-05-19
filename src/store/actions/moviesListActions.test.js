import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './moviesListActions';
import * as types from './actionTypes';
import { MOVIES_LIST } from '../../../test/movies.test-data';
import MovieService from '../../services/MovieService';

jest.mock('../../services/MovieService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('moviesListActions', () => {
  test('should create an action to save movies list', () => {
    const expectedAction = {
      type: types.SAVE_SEARCH_MOVIES_RESULT,
      movies: MOVIES_LIST,
    };
    expect(actions.saveSearchMovies(MOVIES_LIST)).toEqual(expectedAction);
  });

  test('should create an action to save searchBy param', () => {
    const searchByParam = 'title';
    const expectedAction = {
      type: types.SEARCH_BY,
      searchByParam,
    };
    expect(actions.searchBy(searchByParam)).toEqual(expectedAction);
  });

  test('should create an action to set search string', () => {
    const searchString = 'test';
    const expectedAction = {
      type: types.SET_SEARCH_STRING,
      searchString,
    };
    expect(actions.setSearchString(searchString)).toEqual(expectedAction);
  });

  test('should create an action to save sortBy param', () => {
    const sortByParam = 'param';
    const expectedAction = {
      type: types.SORT_BY,
      sortByParam,
    };
    expect(actions.sortBy(sortByParam)).toEqual(expectedAction);
  });

  describe('async actions', () => {
    let store;
    beforeEach(() => {
      const searchMock = jest.fn();
      searchMock.mockReturnValue(Promise.resolve(MOVIES_LIST));
      MovieService.search = searchMock;

      store = mockStore({
        moviesList: {
          searchByParam: 'title',
          searchString: 'test',
          sortByParam: 'release_date',
          movies: [],
        },
      });
    });

    test('should create an async action to search movies', async () => {
      const searchString = 'test';
      const expectedActions = [
        { type: types.SET_SEARCH_STRING, searchString },
        { type: types.SAVE_SEARCH_MOVIES_RESULT, movies: MOVIES_LIST },
      ];

      await store.dispatch(actions.searchMovies(searchString));
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('should create an async action to sort movies', async () => {
      const sortByParam = 'test';
      const expectedActions = [
        { type: types.SORT_BY, sortByParam },
        { type: types.SAVE_SEARCH_MOVIES_RESULT, movies: MOVIES_LIST },
      ];

      await store.dispatch(actions.sortMovies(sortByParam));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
