/*
 * @Author: zhangxiangyi
 * @Date: 2020-05-17 14:22:21
 * @LastEditTime: 2020-05-17 22:02:25
 * @LastEditors: Please set LastEditors
 * @Description: 成绩录入路由 && 保存相应学生数据 
 * @FilePath: /learn_node/express_mysql_demo/student/routes/index.js
 */ 

var express = require('express');
var db      = require('./../db');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'zxy' });
});

// router.post('/', function(req, res, next) {
//     var mysqlParams = [req.body.name,
//         req.body.chinese,
//         req.body.english,
//         req.body.math
//     ];
//     var mysqlQuery = 'INSERT student(name, chinese, english, math) VALUES(?, ?, ?, ?)';
//     db.DBConnetion.query(mysqlQuery, mysqlParams, function(err, rows, fields) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         var success = {
//             message: '增加成功'
//         }

//         res.send(success);
//     })
// })

module.exports = router;
