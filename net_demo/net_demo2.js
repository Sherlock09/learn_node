/*
 * @File: 使用net 查看ssh 服务器
 * @Author: zhangxiangyi
 * @Date: 2020-06-01 15:45:19
 * @Update: 
 */ 

var net = require('net');
var socket = net.connect({ host: process.argv[2], port: 22});
socket.setEncoding('utf8');
socket.once('data', function(chunk) {
    console.log('SSH server version:%j', chunk.trim());
    socket.end();
})