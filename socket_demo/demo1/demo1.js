/*
 * @File: 一个简单的scoket demo 返回服务器时间
 * @Author: zhangxiangyi
 * @Date: 2020-05-29 14:44:04
 * @Update: 
 */ 

var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');

var html = fs.readFileSync('index.html', 'utf8');

function handler(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html, 'utf8'))
    res.end(html);
}

function tick() {
    var now = new Date().toUTCString();
    now = '服务器时间' + now;
    io.sockets.send(now);
}
setInterval(tick, 1000);
app.listen(8080);