import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesList from '../moviesList/moviesList';
import NavPanel from '../navPanel/navPanel';
import MovieDetail from '../movieDetail/movieDetail';
import { loadMovie, deactivateSSRFlag } from '../../store/actions/movieViewActions';
import { genresSelector } from '../../store/selectors/movieSelectors';

export class MovieDetailContainerUI extends Component {
  static propTypes = {
    movie: PropTypes.shape({}),
    moviesByGenre: PropTypes.arrayOf(PropTypes.shape({})),
    loadMovie: PropTypes.func,
    isMovieLoading: PropTypes.bool,
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string,
      }),
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    isSSR: PropTypes.bool,
    deactivateSSRFlag: PropTypes.func,
    genres: PropTypes.string,
  };

  static defaultProps = {
    movie: null,
    moviesByGenre: [],
    loadMovie: () => {},
    isMovieLoading: false,
    isSSR: true,
    deactivateSSRFlag: () => {},
    genres: '',
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

  renderLoading = () => (
    <div className="alert alert-info">Movie is loading...</div>
  );

  renderTable = (movie, moviesByGenre, genres) => (movie
    ?
      <Fragment>
        <MovieDetail movie={movie} />
        <NavPanel
          direction="left"
          secondaryBrand="Films by"
          links={[{ title: `Genre: ${genres}`, active: true, param: 'genres' }]}
        />
        <MoviesList movies={moviesByGenre} openDetailHandler={this.openMovieDetail} />
      </Fragment>
    : <div className="alert alert-warning">Movie is not available :-(</div>);

  render() {
    const {
      movie,
      isMovieLoading,
      moviesByGenre,
      genres,
    } = this.props;
    return (
      <Fragment>
        { isMovieLoading
          ? this.renderLoading()
          : this.renderTable(movie, moviesByGenre, genres)
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    movie, isMovieLoading, moviesByGenre, isSSR,
  } = state.movieView;
  return {
    isSSR,
    movie,
    isMovieLoading,
    moviesByGenre,
    genres: genresSelector(state),
  };
};

const mapDispatchToProps = dispatch => ({
  loadMovie: (id) => {
    dispatch(loadMovie(id));
  },
  deactivateSSRFlag: () => {
    dispatch(deactivateSSRFlag());
  },
});

const MovieDetailContainer = connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainerUI);
export default MovieDetailContainer;
