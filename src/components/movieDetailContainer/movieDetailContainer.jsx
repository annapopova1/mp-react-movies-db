import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesList from '../moviesList/moviesList';
import NavPanel from '../navPanel/navPanel';
import MovieDetail from '../movieDetail/movieDetail';
import { loadMovie } from '../../store/actions/movieViewActions';
import Movie from '../../models/Movie';

export class MovieDetailContainerUI extends Component {
  static propTypes = {
    movie: PropTypes.instanceOf(Movie),
    moviesByGenre: PropTypes.arrayOf(PropTypes.instanceOf(Movie)),
    loadMovie: PropTypes.func,
    isMovieLoading: PropTypes.bool,
    match: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired,
  };

  static defaultProps = {
    movie: null,
    moviesByGenre: [],
    loadMovie: () => {},
    isMovieLoading: false,
  };

  componentDidMount() {
    this.props.loadMovie(this.props.match.params.movieId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.movieId !== prevProps.match.params.movieId) {
      this.props.loadMovie(this.props.match.params.movieId);
    }
  }

  openMovieDetail = movieId => () => {
    this.props.history.push(`/film/${movieId}`);
  };

  render() {
    const { movie, isMovieLoading, moviesByGenre } = this.props;
    return (
      <Fragment>
        {
            isMovieLoading
              ? <div className="alert alert-info">Movie is loading...</div>
              : movie
                ? <Fragment>
                  <MovieDetail movie={movie} />
                  <NavPanel
                    direction="left"
                    secondaryBrand="Films by"
                    links={[{ title: `Genre: ${movie.genres.join(', ')}`, active: true }]}
                  />
                  <MoviesList movies={moviesByGenre} openDetailHandler={this.openMovieDetail} />
                </Fragment>
                : <div className="alert alert-warning">Movie is not available :-(</div>
          }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { movie, isMovieLoading, moviesByGenre } = state.movieView;
  return {
    movie,
    isMovieLoading,
    moviesByGenre,
  };
};

const mapDispatchToProps = dispatch => ({
  loadMovie: (id) => {
    dispatch(loadMovie(id));
  },
});

const MovieDetailContainer = connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainerUI);
export default MovieDetailContainer;
