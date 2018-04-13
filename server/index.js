const express = require('express');
const serverConf = require('./config');

const app = express();

app.use(express.static('build'));

serverConf.configureExpress(app);

app.listen(3005, function () {
  console.log('Express started on port 3005!\n');
});
