import React, { Component } from "react";
import { sortBy } from "lodash";

import { ErrorHandler } from "../errorHandler/errorHandler";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { SearchPanel } from "../searchPanel/searchPanel";
import { MoviesList } from "../moviesList/moviesList";
import { NavPanel } from "../navPanel/navPanel";
import { Movie } from "../../models/Movie";
import "./app.css";

const MOVIES_LIST = [
  new Movie({
    id: 1,
    name: "Test title",
    tagline: "tagline",
    vote_average: 1.5,
    vote_count: 0,
    release_date: "2010.01.10",
    poster_path: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162cee39977%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162cee39977%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    overview: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    budget: 0,
    revenue: 0,
    runtime: 0,
    genres: ["genre1", "genre2"]
  }),
  new Movie({
    id: 2,
    name: "Test title",
    tagline: "tagline",
    vote_average: 4,
    vote_count: 0,
    release_date: "2004.10.10",
    poster_path: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162cee39977%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162cee39977%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    overview: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    budget: 0,
    revenue: 0,
    runtime: 0
  }),
  new Movie({
    id: 3,
    name: "Test title",
    tagline: "tagline",
    vote_average: 1.1,
    vote_count: 0,
    release_date: "2000.10.10",
    poster_path: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162cee39977%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162cee39977%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    overview: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    budget: 0,
    revenue: 0,
    runtime: 0,
    genres: ["genre1", "genre2"]
  }),
  new Movie({
    id: 4,
    name: "Test title",
    tagline: "tagline",
    vote_average: 2,
    vote_count: 0,
    release_date: "2018.10.10",
    poster_path: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162cee39977%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162cee39977%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    overview: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    budget: 0,
    revenue: 0,
    runtime: 0,
    genres: ["genre1"]
  })
];

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchByParam: 'title',
      searchString: '',
      sortByParam: 'releaseDate',
      moviesList: this.sortMoviesBy(MOVIES_LIST, 'releaseDate')
    };
  }

  handleSort = sortParam => e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      sortByParam: sortParam,
      moviesList: this.sortMoviesBy(this.state.moviesList, sortParam)
    });
  }

  sortMoviesBy = (moviesList, param) => {
    return sortBy(moviesList, param);
  }

  handleSearch = (searchParams) => {
    this.setState({
      ...this.state,
      searchByParam: searchParams.searchByParam,
      searchString: searchParams.searchString,
      moviesList: this.sortMoviesBy(this.state.moviesList, this.state.sortByParam)    //TODO search
    });
  }

  render() {
    return (
      <ErrorHandler>
        <Header isMainPage={true} />
        <main className="container py-3">
          <SearchPanel searchByParam={this.state.searchByParam} searchString={this.state.searchString} searchHandler={this.handleSearch} />
          <NavPanel direction={'right'}
            primaryBrand={'7 movies found'}
            secondaryBrand={'Sort by'}
            links={[
              { title: 'release date', param: 'releaseDate', active: this.state.sortByParam === 'releaseDate', handler: this.handleSort },
              { title: 'rating', param: 'voteAvg', active: this.state.sortByParam === 'voteAvg', handler: this.handleSort }
            ]} />
          <MoviesList movies={this.state.moviesList} />
        </main>
        <Footer />
      </ErrorHandler>
    );
  }
}
