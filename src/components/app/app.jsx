import React, { Component } from 'react';
import { sortBy } from 'lodash';

import ErrorHandler from '../errorHandler/errorHandler';
import Footer from '../footer/footer';
import Header from '../header/header';
import SearchPanel from '../searchPanel/searchPanel';
import MoviesList from '../moviesList/moviesList';
import NavPanel from '../navPanel/navPanel';
import './app.css';

import { MOVIES_LIST } from '../../../test/movies.test-data';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchByParam: 'title',
      searchString: '',
      sortByParam: 'releaseDate',
      moviesList: this.sortMoviesBy(MOVIES_LIST, 'releaseDate'),
    };
  }

  handleSort = sortParam => (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      sortByParam: sortParam,
      moviesList: this.sortMoviesBy(this.state.moviesList, sortParam),
    });
  }

  sortMoviesBy = (moviesList, param) => sortBy(moviesList, param)

  handleSearch = (searchParams) => {
    this.setState({
      ...this.state,
      searchByParam: searchParams.searchByParam,
      searchString: searchParams.searchString,
      moviesList: this.sortMoviesBy(this.state.moviesList, this.state.sortByParam), // TODO search
    });
  }

  render() {
    return (
      <ErrorHandler>
        <Header />
        <main className="container py-3">
          <SearchPanel searchByParam={this.state.searchByParam} searchString={this.state.searchString} searchHandler={this.handleSearch} />
          <NavPanel
            direction="right"
            primaryBrand="7 movies found"
            secondaryBrand="Sort by"
            links={[
              {
 title: 'release date', param: 'releaseDate', active: this.state.sortByParam === 'releaseDate', handler: this.handleSort,
},
              {
 title: 'rating', param: 'voteAvg', active: this.state.sortByParam === 'voteAvg', handler: this.handleSort,
},
            ]}
          />
          <MoviesList movies={this.state.moviesList} />
        </main>
        <Footer />
      </ErrorHandler>
    );
  }
}
