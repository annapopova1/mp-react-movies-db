import React from 'react';
import NavPanel from './navPanel';

describe('<NavPanel/>', () => {
  test('should render NavPanel component to show Search By panel', () => {
    const links = [
      {
        title: 'TITLE', param: 'title', active: true, handler: jest.fn(),
      },
      {
        title: 'DIRECTOR', param: 'director', active: false, handler: jest.fn(),
      },
    ];
    const btn = { title: 'SEARCH', handler: jest.fn() };
    const navPanel = shallow(<NavPanel direction="left" secondaryBrand="SEARCH BY" links={links} navBtn={btn} />);
    expect(navPanel).toMatchSnapshot();
  });

  test('should render NavPanel component to show Sort By panel', () => {
    const links = [
      {
        title: 'release date', param: 'releaseDate', active: true, handler: jest.fn(),
      },
      {
        title: 'rating', param: 'voteAvg', active: false, handler: jest.fn(),
      },
    ];
    const navPanel = shallow(<NavPanel
      direction="right"
      primaryBrand="7 movies found"
      secondaryBrand="Sort by"
      links={links}
    />);
    expect(navPanel).toMatchSnapshot();
  });
});
