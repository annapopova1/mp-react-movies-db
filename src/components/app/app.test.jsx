import React from 'react';
import App from './app';

describe('<App/>', () => {
  jest.mock('../../../test/movies.test-data');

  test('should render App component', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});
