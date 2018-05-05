import React from 'react';
import ErrorHandler from './errorHandler';

describe('<ErrorHandler/>', () => {
  const ComponentWithError = () => { throw new Error(); };

  test('should render child elements of ErrorHandler component', () => {
    const errorHandler = shallow(<ErrorHandler><ComponentWithError /></ErrorHandler>);
    expect(errorHandler).toMatchSnapshot();
  });

  test('should render error content for cought exceptions', () => {
    const errorHandler = shallow(<ErrorHandler><ComponentWithError /></ErrorHandler>);
    errorHandler.setState({ hasError: true });
    expect(errorHandler).toMatchSnapshot();
  });
});
