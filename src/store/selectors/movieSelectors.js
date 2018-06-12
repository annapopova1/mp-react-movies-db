import { createSelector } from 'reselect';

export const getMovie = state => state.movieView.movie;

export const genresSelector = createSelector(
  getMovie,
  movie => (movie.genres.join(', ')),
);
