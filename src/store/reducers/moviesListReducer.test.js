import moviesListReducer, { initialState } from './moviesListReducer';
import * as types from '../actions/actionTypes';
import { MOVIES_LIST } from '../../../test/movies.test-data';

describe('moviesListReducer', () => {
  test('should return the initial state', () => {
    expect(moviesListReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SEARCH_BY', () => {
    const act = {
      type: types.SEARCH_BY,
      searchByParam: 'test',
    };
    expect(moviesListReducer({}, act)).toEqual({ searchByParam: 'test' });
  });

  it('should handle SAVE_SEARCH_MOVIES_RESULT', () => {
    const act = {
      type: types.SAVE_SEARCH_MOVIES_RESULT,
      movies: MOVIES_LIST,
    };
    expect(moviesListReducer({}, act)).toEqual({ movies: MOVIES_LIST });
  });

  it('should handle SET_SEARCH_STRING', () => {
    const act = {
      type: types.SET_SEARCH_STRING,
      searchString: 'test',
    };
    expect(moviesListReducer({}, act)).toEqual({ searchString: 'test' });
  });

  it('should handle SORT_BY', () => {
    const act = {
      type: types.SORT_BY,
      sortByParam: 'test',
    };
    expect(moviesListReducer({ movies: MOVIES_LIST }, act)).toEqual({ movies: [], sortByParam: 'test' });
  });
});
