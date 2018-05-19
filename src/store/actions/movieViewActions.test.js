import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './movieViewActions';
import * as types from './actionTypes';
import { MOVIES_LIST } from '../../../test/movies.test-data';
import MovieService from '../../services/MovieService';

jest.mock('../../services/MovieService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('movieViewActions', () => {
  test('should create an action to save selected movie', () => {
    const expectedAction = {
      type: types.SAVE_SELECTED_MOVIE,
      movie: MOVIES_LIST[0],
    };
    expect(actions.saveSelectedMovie(MOVIES_LIST[0])).toEqual(expectedAction);
  });

  test('should create an action to save movies for genres', () => {
    const expectedAction = {
      type: types.SAVE_MOVIES_BY_GENRE,
      movies: MOVIES_LIST,
    };
    expect(actions.saveMoviesByGenre(MOVIES_LIST)).toEqual(expectedAction);
  });

  describe('async actions', () => {
    let store;
    beforeEach(() => {
      const findByIdMock = jest.fn();
      const searchMock = jest.fn();
      findByIdMock.mockReturnValue(Promise.resolve(MOVIES_LIST[0]));
      searchMock.mockReturnValue(Promise.resolve(MOVIES_LIST));
      MovieService.findByid = findByIdMock;
      MovieService.search = searchMock;

      store = mockStore({
        movieView: {
          movie: null,
          moviesByGenre: [],
        },
      });
    });

    test('should create an async action to load movie', async () => {
      const expectedActions = [
        { type: types.SAVE_SELECTED_MOVIE, movie: MOVIES_LIST[0] },
        { type: types.SAVE_MOVIES_BY_GENRE, movies: MOVIES_LIST },
      ];

      await store.dispatch(actions.loadMovie(111));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
