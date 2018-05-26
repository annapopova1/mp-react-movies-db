import React from 'react';
import NotFound from './notFound';

describe('<NotFound/>', () => {
  test('should render NotFound component', () => {
    const notFound = shallow(<NotFound />);
    expect(notFound).toMatchSnapshot();
  });
});
