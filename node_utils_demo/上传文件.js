/*
 * @Author: zhangxiangyi
 * @Date: 2020-05-13 22:30:45
 * @LastEditTime: 2020-05-13 22:51:19
 * @LastEditors: Please set LastEditors
 * @Description: uoload node demo
 * @FilePath: /learn_node/node_utils_demo/上传文件.js
 */

// node 中关于上传 可以使用formidable 这个node 模块
var http = require('http');
var formidable = require('formidable');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);


function upload(req, res) {
    if (!isFormData(req)) {
        res.statusCode = 404;
        res.end('Bad Request: expecting nultipart/form-data');
        return
    }
}
function isFormData(req) {
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf('multipart/form-data');
}

var form = new formidable.IncomingForm();
form.on('filed', function(filed, value) {
    console.log(filed);
    console.log(value);
})

form.on('file', function(name, file) {
    console.log(name);
    console.log(file)
})

form.on('end', function() {
    res.end('upload complete!');
})
form.parse(req)
console.log('Server running at http://127.0.0.1:8081/');