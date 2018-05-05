import React from 'react';
import SearchPanel from './searchPanel';

describe('<SearchPanel/>', () => {
  test('should render SearchPanel component', () => {
    const handler = jest.fn();
    const searchPanel = shallow(<SearchPanel
      searchByParam="director"
      searchString="test str"
      searchHandler={handler}
    />);
    expect(searchPanel).toMatchSnapshot();
  });

  test('should handle search actions', () => {
    const param = 'director';
    const searchStr = 'test str';
    const handler = jest.fn();

    const searchPanel = mount(<SearchPanel
      searchByParam={param}
      searchString={searchStr}
      searchHandler={handler}
    />);

    const btn = searchPanel.find('button').first().simulate('click');
    expect(handler).toBeCalledWith({
      searchByParam: param,
      searchString: searchStr,
    });

    handler.mockClear();

    // search by title with another text
    searchPanel.find('.nav-link').first().simulate('click');
    const input = searchPanel.find('#searchBox').first().simulate('keyUp', {
      keyCode: 80,
    });
    input.getDOMNode().value = 'changed text';
    input.simulate('blur');
    btn.simulate('click');
    expect(handler).toBeCalledWith({
      searchByParam: 'title',
      searchString: 'changed text',
    });

    handler.mockClear();

    // search by clicking enter
    input.getDOMNode().value = 'new text';
    input.simulate('blur');
    input.simulate('keyUp', {
      keyCode: 13,
    });
    expect(handler).toBeCalledWith({
      searchByParam: 'title',
      searchString: 'new text',
    });
  });
});
