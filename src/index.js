import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser'
import { PersistGate } from 'redux-persist/integration/react';

import { store } from './redux/store';
import Products from './pages/products';
import ErrorBoundary from '../src/pages/ErrorBoundary'
import Spinner from './components/spinner'

import '../src/assets/styles/index.css'
import '../src/assets/styles/tailwind.css'
import "react-toastify/dist/ReactToastify.css";

// initialize sentry in production
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
  })
}

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center bg-white bg-opacity-50">
      <Spinner />
      <span className="mt-6 text-sm text-nc-dark-green uppercase">Loading...</span>
    </div>
  )
}


ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      persistor={store.__PERSISTOR}
      loading={<Loader />}
    >
      <ErrorBoundary>
        <Products />
      </ErrorBoundary>
      <ToastContainer autoClose={3000} />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

