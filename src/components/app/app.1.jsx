import React, { Component, Fragment } from 'react';

import ErrorHandler from '../errorHandler/errorHandler';
import Footer from '../footer/footer';
import Header from '../header/header';
import MoviesList from '../moviesList/moviesList';
import NavPanel from '../navPanel/navPanel';
import MovieDetail from '../movieDetail/movieDetail';
import MovieService from '../../services/MovieService';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.movieService = new MovieService();
    this.state = {
      currentMovie: null,
      moviesList: [],
    };
  }

  componentDidMount() {
    this.movieService.findByid(/*447365*/393).then(movie => {
      this.setState({
        ...this.state,
        currentMovie: movie,
      });

      this.movieService.search(movie.genres[0], 'genres', 'release_date').then(movies => {
        this.setState({
          ...this.state,
          moviesList: movies,
        });
      });
    });
  }

  render() {
    return (
      <ErrorHandler>
        <Header isMainPage={false} />
        <main className="container py-3">
          {
            this.state.currentMovie && 
            <Fragment>
              <MovieDetail movie={this.state.currentMovie} />
              <NavPanel direction="left" secondaryBrand="Films by" links={[{ title: `Genre: ${this.state.currentMovie.genres[0]}`, active: true }]} />
              <MoviesList movies={this.state.moviesList} />
            </Fragment>
          }
        </main>
        <Footer />
      </ErrorHandler>
    );
  }
}
