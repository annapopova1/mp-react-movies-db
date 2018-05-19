import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorHandler from '../errorHandler/errorHandler';
import Footer from '../footer/footer';
import Header from '../header/header';
import MoviesList from '../moviesList/moviesList';
import NavPanel from '../navPanel/navPanel';
import MovieDetail from '../movieDetail/movieDetail';
import { loadMovie } from '../../store/actions/movieViewActions';
import Movie from '../../models/Movie';
import './app.css';

class AppUI extends Component {
  static propTypes = {
    movie: PropTypes.instanceOf(Movie),
    moviesByGenre: PropTypes.arrayOf(PropTypes.instanceOf(Movie)),
    loadMovie: PropTypes.func,
  };

  static defaultProps = {
    movie: null,
    moviesByGenre: [],
    loadMovie: () => {},
  };

  componentDidMount() {
    // TODO read id from router in next task
    this.props.loadMovie(424785);
  }

  render() {
    const { movie, moviesByGenre } = this.props;
    return (
      <ErrorHandler>
        <Header isMainPage={false} />
        <main className="container py-3">
          {
            movie &&
            <Fragment>
              <MovieDetail movie={movie} />
              <NavPanel
                direction="left"
                secondaryBrand="Films by"
                links={[{ title: `Genre: ${movie.genres.join(', ')}`, active: true }]}
              />
              <MoviesList movies={moviesByGenre} />
            </Fragment>
          }
        </main>
        <Footer />
      </ErrorHandler>
    );
  }
}

const mapStateToProps = (state) => {
  const { movie, moviesByGenre } = state.movieView;
  return {
    movie,
    moviesByGenre,
  };
};

const mapDispatchToProps = dispatch => ({
  loadMovie: (id) => {
    dispatch(loadMovie(id));
  },
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppUI);
export default App;
