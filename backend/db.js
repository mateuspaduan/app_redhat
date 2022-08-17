var mysql = require('mysql2');
require('dotenv').config()

var mysqlConn = mysql.createConnection({
    host:  process.env.MYSQL_URL,
    user: process.env.MYSQL_USER || 'admin',
    password: process.env.MYSQL_PASSWORD || 'apppassword12345',
    port: process.env.MYSQL_PORT,
    database: proces.env.MYSQL_DATABASE || 'app_db'
  });
  mysqlConn.connect();

  module.exports = mysqlConn;