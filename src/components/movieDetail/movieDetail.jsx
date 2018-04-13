import React from "react";
import "./movieDetail.css";

export const MovieDetail = ({ movie }) => (
  <section>
    <div className="card flex-md-row mb-4 box-shadow">
      <img className="big-movie-image" src={movie.posterPath} />
      <div className="card-body d-flex flex-column align-items-start">
        <h3 className="card-title">
          {movie.title}
          <span className="badge badge-secondary ml-4 rating">{movie.voteAvg}</span>
        </h3>
        {/* <p className="card-subtitle mb-2 text-muted">This is a wider card with supporting.</p> */}
        <p className="card-text text-muted">
          <span>{movie.releaseYear}</span>
          <span className="ml-5">{movie.runtime} min</span>
        </p>
        <p className="card-text">{movie.overview}</p>

      </div>
    </div>
  </section>
);
