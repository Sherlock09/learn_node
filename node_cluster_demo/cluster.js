/*
 * @File: 
 * @Author: zhangxiangyi
 * @Date: 2020-05-29 11:01:35
 * @Update: 
 */ 

var cluster = require('cluster');
// 确定cpus length
var cpus = require('os').cpus().length;
var http = require('http');
if (cluster.isMaster) {
    // 每个内核创建一个fork 进程
    for (var i = 0; i < cpus.length; c++) {
        cluster.fork();
    }
    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker' + worker.process.pid + 'died');
    });
} else {
    http.Server(function(req, res) {
        res.writHead(200);
        res.end('I am a worker running in process' + process.pid)
    }).listen(8000);
}