import { isArray } from 'lodash';
import Movie from '../models/Movie';

export const URL = 'http://react-cdp-api.herokuapp.com/';

class MovieService {
  constructor() {
    this.url = URL;
  }

  search(searchString, searchBy, sortBy) {
    const arraySymbol = isArray(searchString) ? '[]' : '';
    return fetch(`${this.url}movies?search${arraySymbol}=${searchString}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc&offset=0&limit=50`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.status !== 200) {
        return Promise.reject(new Error('Service unavailable'));
      }
      return response.json();
    }).then(result => result.data.map(item => new Movie(item)))
      .catch((e) => {
        console.log(e);
        return [];
      });
  }

  findByid(id) {
    return fetch(`${this.url}movies/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.status !== 200) {
        return Promise.reject(new Error('Service unavailable'));
      }
      return response.json();
    }).then(result => new Movie(result))
      .catch((e) => {
        console.log(e);
        return null;
      });
  }
}

export default new MovieService();
