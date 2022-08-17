var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mysqlConn = require('./db.js');
require('dotenv').config()

if(!process.env.MONGO_URL){
  throw("Can't find environment variable  MONGO_URL")
}else{
  console.log("Mongo URL: "+ process.env.MONGO_URL)
}

if(!process.env.REST_PORT){
  console.log("Can't find environment variable  REST_PORT, fallback to 40000")
}

if(!process.env.SOCKET_PORT){
  console.log("Can't find environment variable  REST_PORT, fallback to 40000")
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());

app.use(express.json());

app.use(logger('dev'));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;

