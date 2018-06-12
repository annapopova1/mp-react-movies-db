import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Main from './main';
import getStoreConfig from './store/storeConfig';
import { searchMovies } from './store/actions/moviesListActions';
import { loadMovie } from './store/actions/movieViewActions';

function render(store, main, res, context) {
  const html = renderToString(main);
  if (context.url) {
    res.redirect(302, context.url);
    return;
  }
  const preloadedState = store.getState();
  const customScript = `window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}`;
  res.render('app', { locals: { html, customScript } });
}

export default function serverRenderer() {
  return (req, res) => {
    const { store } = getStoreConfig();
    const context = {};

    const main = (
      <Main
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    const { queryParam } = req.params;
    if ((req.url.startsWith('/search') || req.url.startsWith('/film')) && queryParam) {
      const asyncAction = req.url.startsWith('/search') ? searchMovies : loadMovie;
      store.dispatch(asyncAction(queryParam)).then(() => {
        render(store, main, res, context);
      });
    } else {
      render(store, main, res, context);
    }
  };
}
