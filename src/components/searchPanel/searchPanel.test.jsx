import React from 'react';
import { SearchPanelUI } from './searchPanel';

describe('<SearchPanel/>', () => {
  const param = 'genres';
  const searchStr = 'test str';
  const toggleSearchHandler = jest.fn();
  const searchHandler = jest.fn();

  test('should render SearchPanel component', () => {
    const searchPanel = shallow(<SearchPanelUI
      searchByParam={param}
      searchString={searchStr}
      toggleSearchBy={toggleSearchHandler}
      search={searchHandler}
    />);
    expect(searchPanel).toMatchSnapshot();
  });

  test('should handle search actions', () => {
    const searchPanel = mount(<SearchPanelUI
      searchByParam={param}
      searchString={searchStr}
      toggleSearchBy={toggleSearchHandler}
      search={searchHandler}
    />);

    searchPanel.find('button').first().simulate('click');
    expect(searchHandler).toBeCalledWith(searchStr);

    searchHandler.mockClear();

    searchPanel.find('.nav-link').first().simulate('click');
    expect(toggleSearchHandler).toBeCalledWith('title');

    toggleSearchHandler.mockClear();

    searchPanel.find('#searchBox').first().simulate('keyUp', {
      keyCode: 13,
    });
    expect(searchHandler).toBeCalledWith(searchStr);
  });
});
