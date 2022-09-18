var mysql = require('mysql2');
const env = require("./bin/environmentSetup")
require('dotenv').config()

  //host: '9.30.13.55',
 // port: '13306',

var mysqlConn = mysql.createConnection({
    host:  env.MYSQL_URL || "localhost",
    user: env.MYSQL_USER || 'admin',
    password: env.MYSQL_PASSWORD || 'apppassword12345',
    port: env.MYSQL_PORT || "13306",
    database: env.MYSQL_DATABASE || 'app_db'
  });
  mysqlConn.connect();

  module.exports = mysqlConn;