import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import App from './components/app/app';
import './main.css';
import MainContainer from './components/mainContainer/mainContainer';
import MovieDetailContainer from './components/movieDetailContainer/movieDetailContainer';
import NotFound from './components/notFound/notFound';

const Main = ({
  Router, location, context, store,
}) => (
  <Provider store={store}>
    <Router location={location} context={context}>
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
      {/* <App>
        <Switch>
          <Redirect exact from="/" to="/search" />
          <Route path="/search/:searchQuery?" component={MainContainer} />
          <Route path="/film/:movieId" component={MovieDetailContainer} />
          <Route path="*" component={NotFound} />
        </Switch>
      </App> */}
    </Router>
  </Provider>
);

export default hot(module)(Main);
