import React from "react";
import { MovieCard } from "../movieCard/movieCard";

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
