import React from 'react';

export default class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    //logErrorToMyService(error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong </h1>;
    }
    return this.props.children;
  }
}
