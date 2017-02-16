var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../public/javascripts/config.js');
var randtoken = require('rand-token');
// MySql module
var mysql  = require('mysql');
var connection = mysql.createConnection({
    host     : config.host,
    user     : config.username,
    password : config.password,
    database : config.database
});
connection.connect();

var bcrypt = require('bcrypt-nodejs');




/* GET top auctions */
router.get('/getHomeAuctions', function(req, res, next) {
    var auctionsQuery = `SELECT * FROM auctions INNER JOIN images on images.auction_id = auctions.id limit 10`;
    connection.query(auctionsQuery, (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});

// Login authentification
router.post('/login', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    // res.json(req.body);
    var checkLoginQuery = `SELECT * FROM users WHERE username = ?`;
    connection.query(checkLoginQuery, [username], (error, results) => {
        if (error) throw error;
        if (results.length === 0) {
            res.json({
                msg: 'badUsername' // Not a valid username
            });
        } else {
            checkHash = bcrypt.compareSync(password, results[0].password);
            if (checkHash) {
                var token = randtoken.uid(40);
                var insertToken = `UPDATE users SET token=?, token_exp=DATE_ADD(NOW(), INTERVAL 1 HOUR) WHERE username = ?`;
                connection.query(insertToken, [token, username], (error2, results2) => {
                    console.log(token);
                    res.json({
                        msg: 'loginSuccess',
                        token: token // Found user and password is validated
                    });
                });
            } else {
                res.json({
                    msg: 'wrongPassword' // Found user but password doesn't match
                });
            }
        }
    });
});

// Make a register post route to handle registration!
router.post('/register', (req, res, next)=>{
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password = bcrypt.hashSync(req.body.password);

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
