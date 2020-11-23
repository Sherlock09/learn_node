/*
 * @Author: zhangxiangyi
 * @Date: 2020-03-18 20:57:40
 * @LastEditTime: 2020-05-12 11:24:32
 * @LastEditors: Please set LastEditors
 * @Description: a node dns demo
 * @FilePath: /learn_node/dns.js
 */


const dns = require('dns');
let domain = 'baidu.com';
dns.resolve(domain, (err, address) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(address)
})