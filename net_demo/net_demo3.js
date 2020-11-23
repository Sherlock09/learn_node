/*
 * @File: 使用net创建 echo 服务器打印内容
 * @Author: zhangxiangyi
 * @Date: 2020-06-01 15:57:00
 * @Update: 
 */ 
 
var net = require('net');
// 创建tcp服务器
net.createServer(function (socket) {
    console.log('start');
    socket.on('data', function (data) {
        console.log('data', data);
    })
    socket.on('end', function() {
        console.log('end event');
    })
    socket.on('close', function() {
        console.log('close event');
    })
    socket.on('error', function(e) {
        console.log('error', e)
    })
    // 一行代码实现echo 协议 pepe 既可以向socket对象输入，也可以接受socket 对象的输出
    // 注意数据默认都是buffer 类型 即二进制类型
    socket.pipe(socket);
}).listen(1337);