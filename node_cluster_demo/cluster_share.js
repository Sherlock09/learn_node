/*
 * @File: cluster 主进程彼此通信
 * @Author: zhangxiangyi
 * @Date: 2020-05-29 11:37:33
 * @Update: 
 */

var cluster = require('cluster');
var http = require('http');
var numCPUS = require('os').cpus.length;
var workers = {};

var requests = 0;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUS; i++) {
        workers[i] = cluster.fork();
        (function (i) {
            workers[i].on('message', function(message) {
                // 监听来自工人的消息
                if (message.cmd == 'incrementRequestTotal') {
                    requests++;
                    // 将新请求总数发送给所有工人
                    for (var j = 0; j < numCPUS; j++) {
                        workers[j].send({
                            cmd: 'undateOfRequestTotal',
                            requests: requests
                        })
                    }
                }
            })
        })(i); // 用闭包保留工人的值
    }
    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker' + worker.process.pid + 'did');
    })
} else {
    process.on('message', function(message) {
        // 监听来自主进程的消息
        if (message.cmd == 'updateOfRequestTotal') {
            // 用主进程的消息更新请求计数
            requests = message.requests;
        }
    });
    http.Server(function(req, res) {
        res.writeHead(200);
        res.end('Worker in process' + process.pid
            + 'says cluster has responded to' + requests
            + 'requests.'
        );
        process.send({cmd: 'incrementRequestTotal'});
    }).listen(8000);
}
