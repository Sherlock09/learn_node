/*
 * @Author: zhangxiangyi
 * @Date: 2020-03-08 21:23:11
 * @LastEditTime: 2020-05-12 17:55:09
 * @LastEditors: Please set LastEditors
 * @Description: a node http work demo
 * @FilePath: /learn_node/http.js
 */

const http = require('http');

const server = http.createServer(function (req, res) {

    let data = '';
    req.on('data', function(chunk) {
        data += chunk;
    });

    req.on('end', function() {
        let method = req.method;
        let url = req.url;
        let headers = JSON.stringify(req.headers);
        let httpVersion = req.httpVersion;
        res.writeHead(200,  {
            'Content-Type': 'text/plain'
        });
        let dataHtml = '<p>data: '+ data +'</p>';
        let methodHtml = '<p>  </p>';

        res.end(resData);
    })
});

server.listen(3000, function () {
    console.log('listening port 3000')
});

const server  = new http.Server();

server.on('request', function(req, res) {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.end('Hello, Node.js!');
});

server.listen(30000, function() {
    console.log('Listening port 30000');
});
