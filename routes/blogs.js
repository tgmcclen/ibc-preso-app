var express = require('express');
var router = express.Router();
var request = require('superagent');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
  var url = 'https://www.google.com.au/';

  request.get(url, function(err, intRes){
    if (err) throw err;
    res.send(intRes.text);
  });
})

module.exports = router;
