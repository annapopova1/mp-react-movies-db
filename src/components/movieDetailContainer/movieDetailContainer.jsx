import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesList from '../moviesList/moviesList';
import NavPanel from '../navPanel/navPanel';
import MovieDetail from '../movieDetail/movieDetail';
import { loadMovie, deactivateSSRFlag } from '../../store/actions/movieViewActions';

export class MovieDetailContainerUI extends Component {
  static propTypes = {
    movie: PropTypes.shape({}),
    moviesByGenre: PropTypes.arrayOf(PropTypes.shape({})),
    loadMovie: PropTypes.func,
    isMovieLoading: PropTypes.bool,
    match: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired,
    isSSR: PropTypes.bool,
    deactivateSSRFlag: PropTypes.func,
  };

  static defaultProps = {
    movie: null,
    moviesByGenre: [],
    loadMovie: () => {},
    isMovieLoading: false,
    isSSR: true,
    deactivateSSRFlag: () => {},
  };

  componentDidMount() {
    if (this.props.isSSR) {
      this.props.deactivateSSRFlag();
    } else {
      this.props.loadMovie(this.props.match.params.movieId);
    }
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
                    links={[{ title: `Genre: ${movie.genres.join(', ')}`, active: true, param: 'genres' }]}
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
  const { movie, isMovieLoading, moviesByGenre, isSSR } = state.movieView;
  return {
    isSSR,
    movie,
    isMovieLoading,
    moviesByGenre,
  };
};

const mapDispatchToProps = dispatch => ({
  loadMovie: (id) => {
    dispatch(loadMovie(id));
  },
  deactivateSSRFlag: () => {
    dispatch(deactivateSSRFlag());
  }
});

const MovieDetailContainer = connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainerUI);
export default MovieDetailContainer;
