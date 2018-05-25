import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movieCard/movieCard';
import Movie from '../../models/Movie';

const MoviesList = ({ movies, openDetailHandler }) => (
  <div className="container">
    {
      movies.length
      ?
        <div className="row">
          {movies.map(movie => (
            <div key={movie.id} className="col-md-4" onClick={openDetailHandler(movie.id)}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      :
        <div className="row">
          <h1 className="m-auto">No films found</h1>
        </div>
    }
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Movie)),
  openDetailHandler: PropTypes.func,
};

MoviesList.defaultProps = {
  movies: [],
  openDetailHandler: () => {},
};

export default MoviesList;
