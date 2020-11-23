/*
 * @Author: your name
 * @Date: 2020-05-17 22:01:57
 * @LastEditTime: 2020-11-23 17:37:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /learn_node/express_mysql_demo/student/db.js
 */
/**
 * @file: database
 * @author: zhangxiangyi
 * @date  2020-05-17
 * @update 
 */ 
const mysql = require('mysql');

const DB = {
    host    : 'localhost',
    user    : 'root',
    port    : '8081',
    password: '123456',
    database: 'student'
}
// 允许每个mysql语句有多条查询.使用它时要非常注意，因为它很容易引起sql注入攻击(默认:false).
const DBConnetion = mysql.createConnection({
    host    : DB.host,
    user    : DB.user,
    port    : DB.port,
    password: DB.password,
    database: DB.database,
    multipleStatements: true
});

DBConnetion.connect();

module.exports.DBConnetion = DBConnetion;