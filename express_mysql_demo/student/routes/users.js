/*
 * @File: 
 * @Author: zhangxiangyi
 * @Date: 2020-05-17 14:22:21
 * @Update: 
 */ 
var express = require('express');
var router  = express.Router();
var db      = require('./../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var mysqlQuery = 'SELECT * FROM student';
    db.DBConnetion.query(mysqlQuery, function(err, rows, fields) {
        if (err) {
          console.log(err);
          return;
        }
        res.render('user', {students: rows})
    })
    res.send('respond with a resource');
});

module.exports = router;
