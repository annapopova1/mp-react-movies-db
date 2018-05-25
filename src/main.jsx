import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './components/app/app';
import './main.css';
import getStoreConfig from './store/storeConfig';
import MainContainer from './components/mainContainer/mainContainer';
import MovieDetailContainer from './components/movieDetailContainer/movieDetailContainer';
import NotFound from './components/notFound/notFound';

const storeConfig = getStoreConfig();

render(
  <Provider store={storeConfig.store}>
    <PersistGate loading={null} persistor={storeConfig.persistor}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/search" />
          <Route path="/">
            <App>
              <Switch>
                <Route path="/search/:searchQuery?" component={MainContainer} />
                <Route path="/film/:movieId" component={MovieDetailContainer} />
                <Route path="*" component={NotFound} />
              </Switch>
            </App>
          </Route>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('movie-db-app'),
);
