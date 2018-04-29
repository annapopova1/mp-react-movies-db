import React, { Component } from "react";

export class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div class="alert alert-danger" role="alert">
          The application was breaking, try again later!
        </div>
      );
    }
    return this.props.children;
  }
}
