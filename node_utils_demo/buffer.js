/*
 * @Author: zhangxiangyi
 * @Date: 2020-05-13 10:17:34
 * @LastEditTime: 2020-05-13 10:27:18
 * @LastEditors: Please set LastEditors
 * @Description: node about buffer
 * @FilePath: /learn_node/node_utils_demo/buffer.js
 */

// JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

// 但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

// 在Node中，应用需要处理网络协议、操作数据库、处理图片、接收上传文件等，在网络流和文件的操作中，还要处理大量二进制数据，

// 在ES6引入TypedArray之前，JavaScript语言没有读取或操作二进制数据流的机制，于是Buffer类被引入作为NodejsAPI的一部分，使其可以在TCP流和文件系统操作等场景中处理二进制数据流。

// 现在TypedArray已经被添加进ES6中，Buffer类以一种更优与更适合Node.js用例的方式实现了Uint8Array。

// Buffer是一个典型的JavaScript与C++结合的模块，它将性能相关部分用C++实现，将非性能相关的部分用JavaScript实现。Buffer类的实例类似于整数数组，除了其是大小固定的、且在V8堆外分配物理内存。Buffer的大小在其创建时就已确定，且不能调整大小。

// 由于Buffer太过常见，Node在进程启动时就已经加载了它，并将其放在全局对象(global)上。所以在使用Buffer时，无须通过require()即可直接使用。


// 在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，

// 每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。

// 在v6.0之前创建Buffer对象直接使用new Buffer()构造函数来创建对象实例，但是Buffer对内存的权限操作相比很大，可以直接捕获一些敏感信息

// 所以在v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。

// Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
// console.log(buf.toString('hex'));

// 常见语法
Buffer.alloc(size[, fill[, encoding]]) // 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
Buffer.allocUnsafe(size) // 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
Buffer.allocUnsafeSlow(size) //
Buffer.from(array) // 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
Buffer.from(arrayBuffer[, byteOffset[, length]])// 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
Buffer.from(buffer)// 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
Buffer.from(string[, encoding])// 返回一个被 string 的值初始化的新的 Buffer 实例

// 写入缓冲区
var buff = Buffer.alloc(256);
var len = buff.write("www.runoob.com");

console.log("写入字节数 : "+  len);

// 从缓冲区读取数据
buf.toString([encoding[, start[, end]]])
