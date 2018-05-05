import React from 'react';
import App from './app';

describe('<App/>', () => {
  jest.mock('../../../test/movies.test-data');

  test('should render App component', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  xtest('should handle soerting', () => {
    const app = mount(<App />);

    const link = app.find('.nav-link').at(1).simulate('click');
  });
});
