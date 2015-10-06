var express = require('express');
var router = express.Router();
var request = require('superagent');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var url = 'https://beercollector.com.au/beers.json';

  request.get(url, function(err, intRes){
    if (err) throw err;
    beers = JSON.parse(intRes.text)
    res.render('beers', { title: 'Beers', beers: beers });
  });
});

module.exports = router;
