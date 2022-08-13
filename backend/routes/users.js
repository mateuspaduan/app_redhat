var express = require('express');
var mysql = require ('mysql2');
var conn = mysql.createConnection({
  host: '9.30.13.55',
  user: 'admin',
  password: 'apppassword12345',
  port: '13306',
  database: 'app_db'
});
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createUser', function (req, res, next) {
  conn.connect();
  conn.query('insert into app_db.users (username,password) values ("test", "testpassword")', function(error, results, fields){
    if (error) throw error;
    res.send("Route is working");
  });
});

module.exports = router;
