import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../../models/Movie';
import './movieDetail.css';

const MovieDetail = ({ movie }) => (
  <section>
    <div className="card flex-md-row mb-4 box-shadow">
      <img className="big-movie-image" src={movie.posterPath} alt="" />
      <div className="card-body d-flex flex-column align-items-start">
        <h3 className="card-title">
          {movie.title}
          { movie.voteAvg && <span className="badge badge-secondary ml-4 rating">{movie.voteAvg}</span> }
        </h3>
        {/* <p className="card-subtitle mb-2 text-muted">This is a wider card with supporting.</p> */}
        <p className="card-text text-muted">
          <span>{movie.releaseYear}</span>
          {movie.runtime && <span className="ml-5">{movie.runtime} min</span>}
        </p>
        <p className="card-text">{movie.overview}</p>

      </div>
    </div>
  </section>
);

MovieDetail.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
};

export default MovieDetail;
