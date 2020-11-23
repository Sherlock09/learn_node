/*
 * @File: redis demo
 * @Author: zhangxiangyi
 * @Date: 2020-05-21 11:16:26
 * @Update: 
 */ 

var redis = require('redis');
var client = redis.createClient(6397, '127.0.0.1');

client.on('error', function(err) {
    console.log('Error' + err);
})
// 操作redis 中的数据
client.set('color', 'red', redis.print);
client.get('color', function(err, value) {
    if (err) throw err;
    console.log('GOT': + value);
})

// 使用hash 表存储和获取数据

// 设定hash 表元素
client.hmset('camping', {
    'shelter': '2-person tent',
    'cooking': 'campstove'
}, redis.print);

// 获取元素“cooking” 的值
client.hget('camping', 'cooking', function(err, value) {
    if (err) throw err;
    console.log('Will be cooking with: ' + value');
})

// 获取hash 表的键

client.hkeys('camping', function(err, keys) {
    if (err) throw err;
    keys.forEach(function(key, i) {
        console.log('  '  + key);
    })
});

// redis 链表

client.lpush('task', 'Paint the bikeshed red.', redis.print)

// lrang会取出链表重的所有元素

client.lrange('tasks', 0, -1, function(err, items) {
    items.forEach(function(item, i) {
        console.log(' ' + item);
    })
})

// 用集合存储和获取数据  如果你要创建一个会议规划程序，可以用集合存储参会 7 者的信息。集合获取数据的性能比链表好。它获取集合成员所用的时间取决于集合的大小(大O表示法中的O(1))

client.sadd('ip_address', '204.10.37.96', redis.print);

client.smembers('ip_address', function(err, members) {
    if (err) throw err;
    console.log(members)
})

// 用信道传输数据

// redis 超越了数据存储的传统职责 它提供的信道是无价之宝 信道是数据传递机制 提供了 发布/预定功能 对于聊天和游戏程序来说  它们很实用

// redis 客户端可以向任一给定的信道预定或者发布消息。 预定一个信道意味着你会收到所有发送给它的消息。发布给信道的消息会发送所有预定了那个信道的客户端

