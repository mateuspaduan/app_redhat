const { builtinModules } = require('module');
var mysql = require('mysql2');
var mysqlConn = mysql.createConnection({
    host: '9.30.13.55',
    user: 'admin',
    password: 'apppassword12345',
    port: '13306',
    database: 'app_db'
  });
  mysqlConn.connect();

  module.exports = mysqlConn;