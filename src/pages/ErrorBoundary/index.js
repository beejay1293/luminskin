import React from 'react';
import * as Sentry from '@sentry/browser';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    Sentry.captureException({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex items-center justify-center w-full h-screen">
          <h1 className="text-lg text-nc-blue">Something went wrong!</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
