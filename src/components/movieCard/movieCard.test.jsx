import React from 'react';
import { MOVIES_LIST } from '../../../test/movies.test-data';
import MovieCard from './movieCard';

describe('<MovieCard/>', () => {
  test('should render MovieCard component', () => {
    const movie = MOVIES_LIST[0];
    const movieCard = shallow(<MovieCard movie={movie} />);
    expect(movieCard).toMatchSnapshot();
  });
});
