const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config();

const usersRouter = require('./routes/users');
const forms = require('./routes/forms');
const googleRouter = require("./routes/google");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname + '/client/build')));

app.use('/users', usersRouter);
app.use('/forms', forms);
app.use("/google", googleRouter);

// catch-all so react can handle routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

module.exports = app;
