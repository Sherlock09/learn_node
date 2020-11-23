/*
 * @Author: v_zhangxiangyi
 * @Date: 2020-05-13 22:54:27
 * @LastEditTime: 2020-05-13 23:14:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn_node/node_utils_demo/https.js
 */

// 现在很多主流的接口都是使用https的 所以不能只是单纯的用http

// node 中使用https 先要取得一个私钥 和一份证书 私钥本质上是一个密钥 
// 它可以用来解密客户端发送给服务器的数据 私钥保存在服务器上的一个文件里
// 放在一个不可信用户无法访问的地方

// demo 生成一个自签发的证书

// 生成私钥 先要openSSL node中内置

// 如果要运行此demo 请生成自己的key.pem
// openssl genrsa 1024 > key.pem

// 同级目录下的 key.pem 就是生成的私钥文件

// 创建证书需要私钥 如下命令会生成名为 key-cert.pem的证书

// openssl req -x509 -new -key key.pem > key-cert.pem

// 同级目录下的key-cert 就是生成key的证书

// 使用http 
// 实测 chrome 中无法访问 safair 中可以

var https = require('https');
var fs = require('fs');
// 配置ssl 密钥和证书
var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./key-cert.pem')
}
https.createServer(options, function (request, response) {
  response.writeHead(200);
  response.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
