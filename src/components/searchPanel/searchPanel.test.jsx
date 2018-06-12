import React from 'react';
import { SearchPanelUI } from './searchPanel';

describe('<SearchPanel/>', () => {
  const param = 'genres';
  const searchStr = 'test str';
  const toggleSearchHandler = jest.fn();
  const searchHandler = jest.fn();
  const match = {};
  const history = { push: jest.fn() };

  test('should render SearchPanel component', () => {
    const searchPanel = shallow(<SearchPanelUI
      searchByParam={param}
      searchString={searchStr}
      toggleSearchBy={toggleSearchHandler}
      search={searchHandler}
      match={match}
      history={history}
    />);
    expect(searchPanel).toMatchSnapshot();
  });

  test('should handle search actions', () => {
    const searchPanel = mount(<SearchPanelUI
      searchByParam={param}
      searchString={searchStr}
      toggleSearchBy={toggleSearchHandler}
      search={searchHandler}
      match={match}
      history={history}
    />);

    searchPanel.find('button').first().simulate('click');
    expect(history.push).toBeCalledWith(`/search/${searchStr}`);

    searchHandler.mockClear();

    searchPanel.find('.nav-link').first().simulate('click');
    expect(toggleSearchHandler).toBeCalledWith('title');

    toggleSearchHandler.mockClear();

    searchPanel.find('#searchBox').first().simulate('keyUp', {
      keyCode: 13,
    });
    expect(history.push).toBeCalledWith(`/search/${searchStr}`);
  });
});
