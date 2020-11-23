/*
 * @Author: zhangxiangyi
 * @Date: 2020-05-12 19:31:38
 * @LastEditTime: 2020-05-13 10:17:27
 * @LastEditors: Please set LastEditors
 * @Description: a node stream project demo
 * @FilePath: /learn_node/node_utils_demo/stream.js
 */

// 关于流 是程序里边一个特别重要的概念 比如传输大文件时 肯定是需要流式传输

// node 中关于数据的流的控制 是由stream 这个模块实现的

// node 中的流 一共有五种类型 readable writeable transform duplex 和 classic

// 创建一个readable 流

var Readable = require('stream').Readable;
var rs = Readable();

var c = 97;
//_read函数也可以获取一个size参数来指明消耗者想要读取多少比特的数据，但是这个参数是可选的。
rs._read = function () {
    rs.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) rs.push(null);
};

rs.pipe(process.stdout);

// writable流
// 一个writable流指的是只能流进不能流出的流:

// src.pipe(writableStream)

var Writable = require('stream').Writable;
var ws = Writable();
ws._write = function (chunk, enc, next) {
    console.dir(chunk);
    next();
};

process.stdin.pipe(ws);

// transform流  
// 你可以将transform流想象成一个流的中间部分，它可以读也可写，但是并不保存数据，它只负责处理流经它的数据。

// duplex流
// Duplex流是一个可读也可写的流，就好像一个电话，可以接收也可以发送语音。一个rpc交换是一个duplex流的最好的例子。如果你看到过下面这样的代码：

// classic流
// Classic流是一个古老的接口，最早出现在node 0.4中。虽然现在不怎么用，但是我们最好还是来了解一下它的工作原理。

// 无论何时，只要一个流对象注册了一个data监听器，它就会自动的切换到classic模式，并且根据旧API的方式运行。
var Stream = require('stream');
var stream = new Stream;
stream.readable = true;

var c = 64;
var iv = setInterval(function () {
    if (++c >= 75) {
        clearInterval(iv);
        stream.emit('end');
    }
    else stream.emit('data', String.fromCharCode(c));
}, 100);

stream.pipe(process.stdout);