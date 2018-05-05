import React, { Component } from 'react';

import ErrorHandler from '../errorHandler/errorHandler';
import Footer from '../footer/footer';
import Header from '../header/header';
import MoviesList from '../moviesList/moviesList';
import NavPanel from '../navPanel/navPanel';
import MovieDetail from '../movieDetail/movieDetail';
import './app.css';

import { MOVIES_LIST } from '../../../test/movies.test-data';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: MOVIES_LIST[0],
      moviesList: MOVIES_LIST, // TODO find movies by genres
    };
  }

  render() {
    return (
      <ErrorHandler>
        <Header isMainPage={false} />
        <main className="container py-3">
          <MovieDetail movie={this.state.currentMovie} />
          <NavPanel direction="left" secondaryBrand="Films by" links={[{ title: `Genre: ${this.state.currentMovie.genres.join(', ')}`, active: true }]} />
          <MoviesList movies={this.state.moviesList} />
        </main>
        <Footer />
      </ErrorHandler>
    );
  }
}
