/*
 * @Author: your name
 * @Date: 2020-05-14 17:57:38
 * @LastEditTime: 2020-05-14 20:08:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn_node/connect_demo/connect.js
 */




var connect = require('connect');
function logger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}
function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
}
connect()
    .use(logger)
    .use(hello)
    .listen(3000);


