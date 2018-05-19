import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorHandler from '../errorHandler/errorHandler';
import Footer from '../footer/footer';
import Header from '../header/header';
import SearchPanel from '../searchPanel/searchPanel';
import MoviesList from '../moviesList/moviesList';
import NavPanel from '../navPanel/navPanel';
import { sortMovies } from '../../store/actions/moviesListActions';
import Movie from '../../models/Movie';
import './app.css';

export class AppUI extends Component {
  static propTypes = {
    sortByParam: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.instanceOf(Movie)),
    sortMovies: PropTypes.func,
  };

  static defaultProps = {
    sortByParam: 'release_date',
    movies: [],
    sortMovies: () => {},
  };

  handleSort = sortByParam => (e) => {
    e.preventDefault();
    this.props.sortMovies(sortByParam);
  }

  render() {
    const { sortByParam, movies } = this.props;
    const moviesCount = movies.length ? `${movies.length} movies found` : '';
    return (
      <ErrorHandler>
        <Header />
        <main className="container py-3">
          <SearchPanel />
          <NavPanel
            direction="right"
            primaryBrand={moviesCount}
            secondaryBrand="Sort by"
            links={[
              {
 title: 'release date', param: 'release_date', active: sortByParam === 'release_date', handler: this.handleSort,
},
              {
 title: 'rating', param: 'vote_average', active: sortByParam === 'vote_average', handler: this.handleSort,
},
            ]}
          />
          <MoviesList movies={movies} />
        </main>
        <Footer />
      </ErrorHandler>
    );
  }
}

const mapStateToProps = (state) => {
  const { movies, sortByParam } = state.moviesList;
  return {
    movies,
    sortByParam,
  };
};

const mapDispatchToProps = dispatch => ({
  sortMovies: (sortParam) => {
    dispatch(sortMovies(sortParam));
  },
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppUI);
export default App;
