import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/app/app';
import './main.css';
import getStoreConfig from './store/storeConfig';

const storeConfig = getStoreConfig();

render(
  <Provider store={storeConfig.store}>
    <PersistGate loading={null} persistor={storeConfig.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('movie-db-app'),
);
