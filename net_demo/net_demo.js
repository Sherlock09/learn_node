/*
 * @File: net demo
 * @Author: zhangxiangyi
 * @Date: 2020-06-01 15:33:51
 * @Update: 
 */ 

// 直接用浏览器是连不上的 这不是http的server 可以使用netcat 或者 telnet

var net = require('net');

net.createServer(function (socket) {
    socket.write('Hello World!\r\n');
    socket.end();
}).listen(8081)
