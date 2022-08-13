var express = require('express');
var router = express.Router();
var mysqlConn = require('../db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createUser', function (req, res, next) {
  mysqlConn.query('insert into app_db.users (username,password) values ("test2", "testpassword2")', function(error, results, fields){
    if (error) throw error;
    res.send("Route is working");
  });
});

module.exports = router;
