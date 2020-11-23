/*
 * @Author: zhangxiangyi
 * @Date: 2020-05-14 11:56:44
 * @LastEditTime: 2020-11-23 17:38:00
 * @LastEditors: Please set LastEditors
 * @Description: node connect mysql demo
 * @FilePath: /learn_node/node_data_demo/mysql.js
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '123456'
});

connection.connect(function (err) {
    if (err) {
        console.log('err:' + err);
        return
    }
    console.log('connection successd!');
});

//执行SQL语句
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) {
//         console.log('[query] - :'+err);
//         return;
//     }
//     console.log('The solution is: ', rows[0].solution);
// });
// //关闭connection
// connection.end(function(err){
//     if(err){
//         return;
//     }
//     console.log('[connection end] succeed!');
// })