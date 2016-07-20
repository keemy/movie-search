const express = require('express');
const helpers = require('../helpers')

let router = express.Router();

router.use('/movie', require('./movie'))

router.get('/', function (req, res) {
  helpers.getMovieConfiguration(function(movieConfig){
    res.status(200).send(movieConfig);
  });
});


module.exports = router;
