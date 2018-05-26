import React from 'react';
import { HeaderUI } from './header';

describe('<Header/>', () => {
  test('should render Header component for main page', () => {
    const location = { pathname: '/search' };
    const history = { push: jest.fn() };
    const header = shallow(<HeaderUI location={location} history={history} />);
    expect(header).toMatchSnapshot();
  });

  test('should render Header component for secondary page', () => {
    const location = { pathname: '/film/600' };
    const history = { push: jest.fn() };
    const header = shallow(<HeaderUI location={location} history={history} />);
    expect(header).toMatchSnapshot();
  });
});
