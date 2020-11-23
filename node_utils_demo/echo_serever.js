/*
 * @Author: zhangxiangyi
 * @Date: 2020-05-12 11:25:16
 * @LastEditTime: 2020-05-12 11:32:47
 * @LastEditors: Please set LastEditors
 * @Description: a node echo server demo
 * @FilePath: /learn_node/node_utils_demo/echo_serever.js
 */

var net = require('net');

var server = net.createServer(function(socket) {
    // 数据只被响应一次
    socket.once('data', function(data) {
        socket.write(data);
    })
})
server.listen(8888)