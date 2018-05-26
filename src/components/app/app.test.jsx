import React from 'react';
import App from './app';

describe('<App/>', () => {
  test('should render App component', () => {
    const app = shallow(<App><div>test</div></App>);
    expect(app).toMatchSnapshot();
  });
});
