import React from "react";
import PropTypes from 'prop-types';
import { MovieCard } from "../movieCard/movieCard";
import { Movie } from "../../models/Movie";

export const MoviesList = ({ movies }) => (
  <div className="container">
    <div className="row">
      {movies.map(movie => (
        <div key={movie.id} className="col-md-4">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  </div>
);

MoviesList.PropTypes = {
  movies: PropTypes.arrayOf(Movie)
}
