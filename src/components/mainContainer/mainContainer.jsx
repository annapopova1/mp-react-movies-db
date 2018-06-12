// @flow
import React, { Component, Fragment, type Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import SearchPanel from '../searchPanel/searchPanel';
import MoviesList from '../moviesList/moviesList';
import NavPanel from '../navPanel/navPanel';
import { sortMovies } from '../../store/actions/moviesListActions';
import { deactivateSSRFlag } from '../../store/actions/movieViewActions';
import Movie from '../../models/Movie';
import { State } from '../../store/storeConfig';

type Props = {
  sortByParam: string,
  movies: Array<Movie>,
  sortMovies: Function,
  history: {
    push: Function,
  },
  isSSR: boolean,
  deactivateSSRFlag: Function,
};

export class MainContainerUI extends Component<Props> {
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

  handleSort = (sortByParam: string) => (e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.sortMovies(sortByParam);
  };

  openMovieDetail = (movieId: string) => () => {
    this.props.history.push(`/film/${movieId}`);
  };

  render(): Node {
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

const mapStateToProps = (state: State) => {
  const { movies, sortByParam } = state.moviesList;
  return {
    movies,
    sortByParam,
    isSSR: state.movieView.isSSR,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<*>): Object => ({
  sortMovies: (sortParam: string) => {
    dispatch(sortMovies(sortParam));
  },
  deactivateSSRFlag: () => {
    dispatch(deactivateSSRFlag());
  },
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainerUI);
export default MainContainer;
