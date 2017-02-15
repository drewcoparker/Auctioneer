var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../public/javascripts/config.js');

// MySql module
var mysql  = require('mysql');
var connection = mysql.createConnection({
    host     : config.host,
    user     : config.username,
    password : config.password,
    database : config.database
});
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
