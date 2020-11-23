/*
 * @Author: zhangxiangyi
 * @Date: 2020-05-14 15:49:45
 * @LastEditTime: 2020-11-23 17:38:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn_node/work_mysql_demo/timetrack_server.js
 */
// 先用MySQL管理工具创建名为timetrack的数据库

// The "value" argument must not be of type number. Received type number 的错误是因为 db de password 为number 
var http  = require('http');
var work  = require('./lib/timetrack');
var mysql = require('mysql');
var db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '123456',
    database: 'timetrack'
})



var server = http.createServer(function (req, res) {
    switch (req.method) {
        case 'POST': {
            switch (req.url) {
                case '/': {
                    work.add(db, req, res);
                    break;
                }
                case '/archive': {
                    work.archive(db, req, res);
                    break;
                }
                case '/delete': {
                    work.delete(db, req, res);
                    break;
                }
            }
            break;
        }

        case 'GET': {
            switch (req.url) {
                case '/': {
                    work.show(db, res);
                    break;
                }
                case '/archived': {
                    work.showArchived(db, res);
                    break;
                }
            }
            break;
        }
    }
});

db.query(
    'create table if not exists work ( ' +
    'id int(10) not null auto_increment, ' +
    'hours decimal(5, 2) default 0, ' +
    'date date, ' +
    'archived int(1) default 0, ' +
    'description longtext, ' +
    'primary key(id) )',
    function (err) {
        if (err) throw err;
        console.log('Server started...');
        server.listen(3000, '127.0.0.1');
    }
)

console.log('Server running at http://127.0.0.1:3000/');