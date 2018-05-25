import {
  SAVE_SELECTED_MOVIE,
  SAVE_MOVIES_BY_GENRE,
  START_LOADING_MOVIE,
} from './actionTypes';
import MovieService from '../../services/MovieService';

export const startLoadingMovie = () => ({
  type: START_LOADING_MOVIE,
});

export const saveSelectedMovie = movie => ({
  type: SAVE_SELECTED_MOVIE,
  movie,
});

export const saveMoviesByGenre = movies => ({
  type: SAVE_MOVIES_BY_GENRE,
  movies,
});

export const loadMovie = id => async (dispatch) => {
  dispatch(startLoadingMovie());

  const movie = await MovieService.findByid(id);
  dispatch(saveSelectedMovie(movie));

  const movies = await MovieService.search(movie.genres, 'genres', 'release_date');
  dispatch(saveMoviesByGenre(movies));
};
