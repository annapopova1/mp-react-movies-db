import { isArray } from 'lodash';
import Movie from '../models/Movie';

export const URL = 'http://react-cdp-api.herokuapp.com/';

class MovieService {
  constructor() {
    this.url = URL;
  }

  search(searchString, searchBy, sortBy) {
    const arraySymbol = isArray(searchString) ? '[]' : '';
    const search = `search${arraySymbol}=${searchString}`;
    const searchByParam = `searchBy=${searchBy}`;
    const sortByparam = `sortBy=${sortBy}`;
    const sortOrder = 'sortOrder=desc';
    const paging = 'offset=0&limit=50';
    return fetch(`${this.url}movies?${search}&${searchByParam}&${sortByparam}&${sortOrder}&${paging}`, {
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
        /* eslint-disable no-console */
        console.log(e);
        /* eslint-enable no-console */
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
        /* eslint-disable no-console */
        console.log(e);
        /* eslint-enable no-console */
        return null;
      });
  }
}

export default new MovieService();
