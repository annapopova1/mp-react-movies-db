import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './main';
import getStoreConfig from './store/storeConfig';

const storeConfig = getStoreConfig(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

const main = (
  <Main
    Router={Router}
    store={storeConfig.store}
  />
);

hydrate(main, document.getElementById('movie-db-app'));
