import React from "react";
import "./movieCard.css";

export const MovieCard = ({ movie }) => (
  <div className="card mb-4 box-shadow">
    <img className="card-img-top movie-image" src={movie.posterPath}/>
    <div className="card-body">
      <div className="d-flex justify-content-between">
        <p className="card-text">{movie.title}</p>
        <p className="card-text">{movie.releaseYear}</p>
      </div>
      <small className="text-muted">{movie.genres.join(' & ')}</small>
    </div>
  </div>
);
