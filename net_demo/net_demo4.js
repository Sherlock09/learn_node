/*
 * @File: net 实现tcp 客户端
 * @Author: zhangxiangyi
 * @Date: 2020-06-01 16:11:20
 * @Update: 
 */ 

var net = require('net');

var host = process.argv[2];
// process 对象 包含当前进程的相关信息， 比如传给它的参数和当前设定的环境变量
// 从命令行解析出来的主机和端口 process argv
var port = Number(process.argv[3]);

// 创建socket实例 并开始连接服务器
var socket = net.connect(port, host);

// 到服务器的连接建立好后处理 connect事件
socket.on('connect', function() {
    //将进程的 stdin传给 socket
    process.stdin.pipe(socket);
    // 将 socket 的 数据传给进 程的stdout
    socket.pipe(process.stdout);
    // 在stdin上调用resume()， 开始读取数据
    process.stdin.resume();
})


// 当发生event事件 时中断stdin
socket.on('end', function () {
    process.stdin.pause();
})

