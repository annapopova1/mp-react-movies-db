import moviesListReducer from './moviesListReducer';
import movieViewReducer from './movieViewReducer';

const initialState = {};

export default (state = initialState, action) => ({
  moviesList: moviesListReducer(state.moviesList, action),
  movieView: movieViewReducer(state.movieView, action),
});
