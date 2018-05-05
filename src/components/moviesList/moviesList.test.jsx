import React from 'react';
import { MOVIES_LIST } from '../../../test/movies.test-data';
import MoviesList from './moviesList';

describe('<MoviesList/>', () => {
  test('should render MoviesList component with items', () => {
    const moviesList = shallow(<MoviesList movies={MOVIES_LIST} />);
    expect(moviesList).toMatchSnapshot();
  });

  test('should render message about empty movies list', () => {
    const moviesList = shallow(<MoviesList />);
    expect(moviesList).toMatchSnapshot();
  });
});
