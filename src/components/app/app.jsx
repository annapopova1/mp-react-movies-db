import React, { Component } from 'react';
import ErrorHandler from '../errorHandler/errorHandler';
import Footer from '../footer/footer';
import Header from '../header/header';
import SearchPanel from '../searchPanel/searchPanel';
import MoviesList from '../moviesList/moviesList';
import NavPanel from '../navPanel/navPanel';
import MovieService from '../../services/MovieService';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.movieService = new MovieService();
    this.state = {
      searchByParam: 'title',
      searchString: '',
      sortByParam: 'release_date',
      moviesList: [],
    };
  }

  handleSort = sortByParam => (e) => {
    e.preventDefault();
    this.search(this.state.searchString, this.state.searchByParam, sortByParam);
  }

  handleSearch = (searchParams) => {
    const {searchByParam, searchString} = searchParams;
    this.search(searchString, searchByParam, this.state.sortByParam);
  }

  search(searchString, searchByParam, sortByParam) {
    this.movieService.search(searchString, searchByParam, sortByParam).then(movies => {
      this.setState({
        ...this.state,
        searchByParam,
        searchString,
        sortByParam,
        moviesList: movies,
      });
    });
  }

  render() {
    const movies = this.state.moviesList;
    const moviesCount = movies.length ? `${movies.length} movies found` : '';
    return (
      <ErrorHandler>
        <Header />
        <main className="container py-3">
          <SearchPanel searchByParam={this.state.searchByParam} searchString={this.state.searchString} searchHandler={this.handleSearch} />
          <NavPanel
            direction="right"
            primaryBrand={moviesCount}
            secondaryBrand="Sort by"
            links={[
              {
 title: 'release date', param: 'release_date', active: this.state.sortByParam === 'release_date', handler: this.handleSort,
},
              {
 title: 'rating', param: 'vote_average', active: this.state.sortByParam === 'vote_average', handler: this.handleSort,
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
