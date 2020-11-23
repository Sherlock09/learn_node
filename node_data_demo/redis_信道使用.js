/*
 * @File: redis
 * @Author: zhangxiangyi
 * @Date: 2020-05-21 14:16:06
 * @Update: 
 */ 

// 用信道传输数据

// redis 超越了数据存储的传统职责 它提供的信道是无价之宝 信道是数据传递机制 提供了 发布/预定功能 对于聊天和游戏程序来说  它们很实用

// redis 客户端可以向任一给定的信道预定或者发布消息。 预定一个信道意味着你会收到所有发送给它的消息。发布给信道的消息会发送所有预定了那个信道的客户端

var net = require('net');

var redis = require('redis');

// 为每个连接到聊天服务器上的用户定义设置逻辑
var server = net.createServer(function(socket) {
    var subscriber;
    var publisher;
    socket.on('connect', function () {
        // 为用户创建预定客户端
        subscriber = redis.createClient();
        // 预定信道
        subscriber.subscribe('main_chat_room');
        // 信道收到消息后 把它发给用户
        subscriber.on('message', function(channel, message) {
            socket.write('Channel' + channel + ':' + message);
        });
        // 为用户创建发布客户端
        publisher = redis.createClient();
    });
    // 用户输入消息后发布它
    socket.on('data', function(data) {
        publisher.publish('main_chat_room', data);
    });

    socket.on('end', function() {
        subscriber.unsubscribe('main_chat_room');

        subscriber.end();
        publisher.end();
    })
})

server.listen(3000);