import rootReducer from './root';
import { initialState as moviesListInitialState } from './moviesListReducer';
import { initialState as movieViewInitialState } from './movieViewReducer';

describe('rootReducer', () => {
  test('should return the initial state', () => {
    const initialState = {
      moviesList: moviesListInitialState,
      movieView: movieViewInitialState,
    };
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
});
