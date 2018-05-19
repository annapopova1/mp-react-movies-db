import fetchMock from 'fetch-mock';
import MovieService from './MovieService';
import { MOVIES_RESPONSE, SINGLE_MOVIE_RESPONSE, MOVIES_LIST } from '../../test/movies.test-data';

describe('MovieService', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('should search', async () => {
    fetchMock.get('*', MOVIES_RESPONSE);
    const movies = await MovieService.search('test str', 'test_title', 'test_sort');
    expect(movies).toEqual(MOVIES_LIST);
  });

  test('should return empty array for any search exceptions', async () => {
    fetchMock.get('*', { status: 500 });
    const movies = await MovieService.search('test str', 'test_title', 'test_sort');
    expect(movies).toEqual([]);
  });

  test('should find by id', async () => {
    fetchMock.get('*', SINGLE_MOVIE_RESPONSE);
    const movie = await MovieService.findByid(100);
    expect(movie).toEqual(MOVIES_LIST[0]);
  });

  test('should return null for any search exceptions', async () => {
    fetchMock.get('*', { status: 500 });
    const movie = await MovieService.findByid(100);
    expect(movie).toEqual(null);
  });
});
