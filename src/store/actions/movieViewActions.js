import {
  SAVE_SELECTED_MOVIE,
  SAVE_MOVIES_BY_GENRE,
} from './actionTypes';
import MovieService from '../../services/MovieService';

export const saveSelectedMovie = movie => ({
  type: SAVE_SELECTED_MOVIE,
  movie,
});

export const saveMoviesByGenre = movies => ({
  type: SAVE_MOVIES_BY_GENRE,
  movies,
});

export const loadMovie = id => (dispatch) => {
  MovieService.findByid(id).then((movie) => {
    dispatch(saveSelectedMovie(movie));

    MovieService.search(movie.genres, 'genres', 'release_date').then((movies) => {
      dispatch(saveMoviesByGenre(movies));
    });
  });
};
