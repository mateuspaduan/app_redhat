var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello world");
});

router.post('/login', function(req, res, next) {
  console.log("Hey, a login")
  console.log(req.body);
  res.json({ received: true })
})

router.post('/register', function(req, res, next) {
  console.log("Hey, a register")
  console.log(req.body);

  res.json({ received: true })
})

module.exports = router;
