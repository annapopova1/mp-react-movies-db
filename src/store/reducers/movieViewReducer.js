import {
  SAVE_SELECTED_MOVIE,
  SAVE_MOVIES_BY_GENRE,
  START_LOADING_MOVIE,
  DEACTIVATE_SSR_FLAG,
} from '../actions/actionTypes';

export const initialState = {
  isSSR: true,
  isMovieLoading: false,
  movie: null,
  moviesByGenre: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_MOVIE:
      return {
        ...state,
        isMovieLoading: true,
      };

    case SAVE_SELECTED_MOVIE:
      return {
        ...state,
        isMovieLoading: false,
        movie: action.movie,
      };

    case SAVE_MOVIES_BY_GENRE:
      return {
        ...state,
        moviesByGenre: action.movies,
      };

    case DEACTIVATE_SSR_FLAG:
      return {
        ...state,
        isSSR: false,
      };

    default:
      return state;
  }
};
