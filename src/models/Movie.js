import { get } from 'lodash';

export default class Movie {
  constructor(movie) {
    if (movie) {
      this.id = get(movie, 'id');
      this.title = get(movie, 'name');
      this.tagline = get(movie, 'tagline');
      this.voteAvg = get(movie, 'vote_average', 0);
      this.voteCount = get(movie, 'vote_count', 0);
      this.releaseDate = get(movie, 'release_date');
      this.releaseYear = this.getReleaseYear();
      this.posterPath = get(movie, 'poster_path');
      this.overview = get(movie, 'overview');
      this.budget = get(movie, 'budget', 0);
      this.revenue = get(movie, 'revenue', 0);
      this.runtime = get(movie, 'runtime', 0);
      this.genres = get(movie, 'genres', []);
    }
  }

  getReleaseYear() {
    return Number(this.releaseDate.substring(0, 4));
  }
}
