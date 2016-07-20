const express = require('express');
const request = require('request');


const config = require('../config');

let router = express.Router();


router.get('/popular/:page?',function (req, res) {
  request({
    method: 'GET',
    url: config.api_root + '/movie/popular',
    qs: {
      api_key: config.api_key,
      page: req.params.page || 1
    }, headers: {
      'Accept': 'application/json'
    }}, function (error, response, body) {
      res.status(200).send(body);
  });
});

router.get('/search/:page?',function (req, res) {
  request({
    method: 'GET',
    url: config.api_root + '/search/movie',
    qs: {
      api_key: config.api_key,
      query: req.query.query || '',
      page: req.params.page || 1
    }, headers: {
      'Accept': 'application/json'
    }}, function (error, response, body) {
      res.status(200).send(body);
  });
});

router.get('/info/:id',function (req, res) {
  request({
    method: 'GET',
    url: config.api_root + '/movie/' + req.params.id,
    qs: {
      api_key: config.api_key,
    }, headers: {
      'Accept': 'application/json'
    }}, function (error, response, body) {
      res.status(200).send(body);
  });
});

router.get('/', function (req, res) {
  // TODO actually implement this
  return res.status(200).send('swag');
});

module.exports = router;
