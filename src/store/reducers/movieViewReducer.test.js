import movieViewReducer, { initialState } from './movieViewReducer';
import * as types from '../actions/actionTypes';
import { MOVIES_LIST } from '../../../test/movies.test-data';

describe('movieViewReducer', () => {
  test('should return the initial state', () => {
    expect(movieViewReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SAVE_SELECTED_MOVIE', () => {
    const act = {
      type: types.SAVE_SELECTED_MOVIE,
      movie: MOVIES_LIST[0],
    };
    expect(movieViewReducer({}, act)).toEqual({ movie: MOVIES_LIST[0] });
  });

  it('should handle SAVE_MOVIES_BY_GENRE', () => {
    const act = {
      type: types.SAVE_MOVIES_BY_GENRE,
      movies: MOVIES_LIST,
    };
    expect(movieViewReducer({}, act)).toEqual({ moviesByGenre: MOVIES_LIST });
  });
});
