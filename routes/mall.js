var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mall', { title: 'Search Results for mall' });
});

module.exports = router;