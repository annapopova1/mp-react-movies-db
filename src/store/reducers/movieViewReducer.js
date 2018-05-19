import {
  SAVE_SELECTED_MOVIE,
  SAVE_MOVIES_BY_GENRE,
} from '../actions/actionTypes';

export const initialState = {
  movie: null,
  moviesByGenre: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SELECTED_MOVIE:
      return {
        ...state,
        movie: action.movie,
      };

    case SAVE_MOVIES_BY_GENRE:
      return {
        ...state,
        moviesByGenre: action.movies,
      };

    default:
      return state;
  }
};
