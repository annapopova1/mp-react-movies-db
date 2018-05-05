import React from 'react';
import Header from './header';

describe('<Header/>', () => {
  test('should render Header component for main page', () => {
    const header = shallow(<Header />);
    expect(header).toMatchSnapshot();
  });

  test('should render Header component for secondary page', () => {
    const header = shallow(<Header isMainPage={false} />);
    expect(header).toMatchSnapshot();
  });
});
