/*
 * @File: scoket + express 监听样式改变
 * @Author: zhangxiangyi
 * @Date: 2020-05-29 15:26:26
 * @Update: 
 */ 


var fs      = require('fs');
var url     = require('url');
var http    = require('http');
var path    = require('path');
var express = require('express');
var app     = express();
// 创建express服务器
var server  = http.createServer(app);
// 包装http服务器创建 scoket.io 实例
var io      = require('socket.io').listen(server);
var root    = __dirname;

app.use(function (req, res, next) {
     
    // 用中间件开始监测 由static 中间件返回的文件
    req.on('static', function() {
        console.log('dfs')
        var file = url.parse(req.url).pathname;
        var mode = 'stylesheet';
        if (file[file.length - 1] == '/') {
            file += 'index.html';
            mode = 'reload';
        }
        // 确定要提供的文件名并调用createWatcher()
        createWatcher(file, mode);
    });
    next();
})

// 将服务器设置为基本的静态文件服务器
app.use(express.static(root));

var watchers = {};

function createWatcher(file, event)  {
   
    var absolute = path.join(root, file);

    if (watchers[absolute]) {
        return;
    }
    // 监测文件变化 检查 mtime（最后修改时间）是否有变化，如果变了，激发socket.io事件
    fs.watchFile(absolute, function(curr, prev) {
        if (curr.mtime != prev.mtime) {
            io.sockets.emit(event, file);
        }
    });
    // 将文件标记为监测对象
    watchers[absolute] = true;
}

server.listen(8080);