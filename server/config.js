function configureExpress(app) {
  app.get('/ttt', function(req, res) {
    console.log('test express');
    res.send('Hello World');
  });
}

exports.configureExpress = configureExpress;
