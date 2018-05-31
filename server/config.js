const configureExpress = (app) => {
  const es6Renderer = require('express-es6-template-engine');
  app.engine('html', es6Renderer);
  app.set('views', './build');
  app.set('view engine', 'html');

  const express = require('express');
  const router = express.Router();

  let serverRenderer;

  if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
    const webpackConfig = require('../webpack');
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
    serverRenderer = webpackHotServerMiddleware(compiler);
  } else {
    serverRenderer = require('../build/serverRenderer').default();
  }

  router.get('/search/:queryParam', serverRenderer);
  router.get('/film/:queryParam', serverRenderer);
  router.get('/*', serverRenderer);

  app.use(router);
}

exports.configureExpress = configureExpress;
