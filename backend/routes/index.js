var express = require('express');
var router = express.Router();
var mysqlConn = require('../db.js');

const io = require("../bin/www")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello world");
});

router.post('/login', function(req, res, next) {
  console.log("Hey, a login")
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  if (username == null || password == null) {
    res.status(401);
    res.json({error: "Username or passoword is null."});
  } else {
    mysqlConn.query(`select count(*) as usersCount from app_db.users where username="${req.body.username}" and password="${req.body.password}"`, function(error, results, fields){
      if (error) {
        console.error(error);
        res.status(500);
        res.json({error: "Error reading from database."})
        throw error;
      } else {
        console.log(results[0].usersCount);
        if (results[0].usersCount > 1) {
          res.status(200);
          res.json({ received: true });
        } else {
          res.status(401);
          res.json({error: "Unauthorized"});
        }
      }
    });
  }
})

router.post('/register', function(req, res, next) {
  console.log("Hey, a register")
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;  
  if (username == null || password == null) {
    res.status(401);
    res.json({error: "Username or passoword is null."});
  } else {
    mysqlConn.query(`insert into app_db.users (username,password) values ("${req.body.username}", "${req.body.password}")`, function(error, results, fields){
      if (error) {
        console.error(error);
        res.status(500);
        res.json({error: "Error creating user."})
        throw error;
      } else {
        console.log("User added to the database.")
        res.json({ received: true });
      }
    });
  }
})

router.post('/cleanDatabase', function(req, res, next) {
  console.log("Cleaning database");
  mysqlConn.query(`delete from app_db.users`, function(error, results, fields){
    if (error) {
      console.error(error);
      res.status(500);
      res.json({error: "Error cleaning database."})
      throw error;
    }
  });
})

module.exports = router;