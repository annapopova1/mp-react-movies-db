import React from 'react';
import { MOVIES_LIST } from '../../../test/movies.test-data';
import MovieDetail from './movieDetail';

describe('<MovieDetail/>', () => {
  test('should render MovieDetail component', () => {
    const movie = MOVIES_LIST[0];
    const movieDetail = shallow(<MovieDetail movie={movie} />);
    expect(movieDetail).toMatchSnapshot();
  });
});
