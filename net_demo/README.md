<!--
 * @File: 
 * @Author: zhangxiangyi
 * @Date: 2020-06-01 15:32:42
 * @Update: 
--> 
# 关于node 的net 模块 它是node 中最基础的网络模块 也是node中各个协议的底层
# net模块提供了一个原始的TCP/IP socket接口，
# 你可以用在自己的程序中。创建TCP服务器的API跟创建HTTP服务器的很像:调用net.createServer()并给它传入一个回调函数，
# 每建 立一个连接都会调用它。主要区别在于创建TCP服务器时，回调函数只有一个参数(通常命名为 socket)，是一个Socket对象，而创建HTTP服务器时的参数是req和res。
# Socket类 在Node中，Socket类同时用在net模块的客户端和服务器端。
# 它是 Stream的子类，既可读又可写(双向)。也就是说，当有输入数据要从socket中读取出 来时它会发出data事件，当要发送输出数据时它有write()和end()函数。

# demo1（需要开启两个终端 一个启动net 作为tcp服务器 一个连接端口）
# node net_demo1.js 
# telnet localhost 8081

# demo2
# node net_demo2.js github.com

# demo3（需要开启两个终端 一个启动net 作为tcp服务器 一个连接端口）

# node net_demo3.js 
# telnet localhost 1337

# demo4