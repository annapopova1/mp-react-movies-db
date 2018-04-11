var express = require('express');

var app = express();

if (app) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
