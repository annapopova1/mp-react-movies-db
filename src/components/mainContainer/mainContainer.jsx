import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchPanel from '../searchPanel/searchPanel';
import MoviesList from '../moviesList/moviesList';
import NavPanel from '../navPanel/navPanel';
import { sortMovies } from '../../store/actions/moviesListActions';
import { deactivateSSRFlag } from '../../store/actions/movieViewActions';

export class MainContainerUI extends Component {
  static propTypes = {
    sortByParam: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.shape({})),
    sortMovies: PropTypes.func,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    isSSR: PropTypes.bool,
    deactivateSSRFlag: PropTypes.func,
  };

  static defaultProps = {
    sortByParam: 'release_date',
    movies: [],
    sortMovies: () => {},
    isSSR: true,
    deactivateSSRFlag: () => {},
  };

  componentDidMount() {
    if (this.props.isSSR) {
      this.props.deactivateSSRFlag();
    }
  }

  handleSort = sortByParam => (e) => {
    e.preventDefault();
    this.props.sortMovies(sortByParam);
  };

  openMovieDetail = movieId => () => {
    this.props.history.push(`/film/${movieId}`);
  };

  render() {
    const { sortByParam, movies } = this.props;
    const moviesCount = movies.length ? `${movies.length} movies found` : '';
    return (
      <Fragment>
        <SearchPanel />
        <NavPanel
          direction="right"
          primaryBrand={moviesCount}
          secondaryBrand="Sort by"
          links={[
            {
              title: 'release date',
              param: 'release_date',
              active: sortByParam === 'release_date',
              handler: this.handleSort,
            },
            {
              title: 'rating',
              param: 'vote_average',
              active: sortByParam === 'vote_average',
              handler: this.handleSort,
            },
          ]}
        />
        <MoviesList movies={movies} openDetailHandler={this.openMovieDetail} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { movies, sortByParam } = state.moviesList;
  return {
    movies,
    sortByParam,
    isSSR: state.movieView.isSSR,
  };
};

const mapDispatchToProps = dispatch => ({
  sortMovies: (sortParam) => {
    dispatch(sortMovies(sortParam));
  },
  deactivateSSRFlag: () => {
    dispatch(deactivateSSRFlag());
  },
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainerUI);
export default MainContainer;
