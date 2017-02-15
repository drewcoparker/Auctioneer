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

// Make a register post route to handle registration!
router.post('/register', (req, res, next)=>{
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    var checkDupeUserQuery = 'SELECT * FROM users WHERE username = ?';
    connection.query(checkDupeUserQuery, [username], (dupeError, results, fields) => {
        if (dupeError) throw dupeError;
        if (results.length === 0) {
            var insertUserQuery = 'INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)';
            connection.query(insertUserQuery, [name, username, email, password], (insertError, results, fields) => {
                if (insertError) throw insertError;
                res.json({
                    msg: 'userInserted'
                });
            });
        } else {
            res.json({
                msg: 'userNameTaken'
            });
        }
    });
});

module.exports = router;
