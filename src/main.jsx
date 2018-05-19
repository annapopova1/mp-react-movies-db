import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import './main.css';
import getStore from './store/store';

render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById('movie-db-app'),
);
