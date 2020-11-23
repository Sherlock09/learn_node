/*
 * @Author: zhangxiangyi
 * @Date: 2020-05-12 11:43:28
 * @LastEditTime: 2020-05-13 23:19:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn_node/node_utils_demo/事件发射器.js
 */

var events = require('events');

var net = require('net');

var channel = new events.EventEmitter();

channel.clients = {};

channel.subscriptions = {};

channel.on('join', function(id, client) {
    this.clients[id] = client;
    this.subscriptions[id] = function(senderId, message) {
        if (id != senderId) {
            this.clients[id].write(message);
        }
    }
    this.on('broadcast', this.subscriptions[id]);
});

channel.on('leave', function (id) {
    channel.removeListener(
        'broadcast', this.subscriptions[id]
    );
    channel.emit('broadcast', id, id + "has left the chat.\n")
})

var server = net.createServer(function (client) {
    var id = client.remoteAddress + ':' + client.remotePort;
    client.on('connect', function() {
        channel.emit('join', id, client);
    });

    client.on('data', function(data) {
        data = data.toString();
        channel.emit('broadcast', id, data);
    });
})

server.listen(8888, function() {
    console.log('Server listening on port 8888 is ok')
})