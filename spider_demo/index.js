const request = require('request');
const path = require('path');
const fs = require('fs');
const config = require('./config');
const analyze = require('./analyze');
const https = require('https')
const http = require('http')


/**
 * 请求图片地址
 *
 */
function start() {

  // 通过http 发起请求
  // URL作为options
  const options = new URL(config.url);
  // 获取协议
  const protocol = options.protocol
  const _http = protocol === 'HTTPS' ? https : http
  //发起请求获取 DOM
  const req = https.request(config.url, function(res) {
    let htmlData = ''
    res.on('data', (chunk) => {
        
        htmlData += chunk.toString('utf8')
        console.log(htmlData)
    });
    console.log(htmlData)
    // if (!err && res) {
    //   console.log('start');
    //   // 将 downLoad 函数作为参数传递给 analyze 模块的 findImg 方法
    //   analyze.findImg(body, downLoad);
    // }
  });
  req.on('error', (err) => {
    console.error(err)
  })
  req.end();


  // 通过request 发起请求 结论是request 无法调通
  // request.get(config.url, function(err, res, body) {
  //     console.log(err)
  //     // console.log(res)
  //     console.log(body)
  // });


}


/**
 * 获取到 findImg 函数返回的图片地址后，利用 request 再次发起请求，将数据写入本地。
 *
 * @param {*} imgUrl
 * @param {*} i
 */
function downLoad(imgUrl, i) {
  let ext = imgUrl.split('.').pop();

  // 再次发起请求，写文件
  request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), {
    'encoding': 'utf8',
  }));
  console.log(i);
}

start();