import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorHandler extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    /* eslint-disable no-console */
    console.log(error);
    console.log(info);
    /* eslint-enable no-console */
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger" role="alert">
          The application was breaking, try again later!
        </div>
      );
    }
    return this.props.children;
  }
}
