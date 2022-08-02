var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var form = require('./routes/formRouting');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname + '/react-ui/build')));

app.use('/users', usersRouter);
app.use('/form', form);

// catch-all so react can handle routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

module.exports = app;
