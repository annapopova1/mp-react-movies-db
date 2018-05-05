import React from 'react';
import Footer from './footer';

describe('<Footer/>', () => {
  test('should render Footer component', () => {
    const footer = shallow(<Footer />);
    expect(footer).toMatchSnapshot();
  });
});
