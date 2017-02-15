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

/* GET top auctions */
router.get('/getHomeAuctions', function(req, res, next) {
    var auctionsQuery = `SELECT * FROM auctions INNER JOIN images on images.auction_id = auctions.id limit 10`;
    connection.query(auctionsQuery, (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});

module.exports = router;
