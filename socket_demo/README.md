<!--
 * @File: 
 * @Author: zhangxiangyi
 * @Date: 2020-05-29 14:35:06
 * @Update: 
--> 
# scoket.io 

# Socket.IO(http://socket.io)可以说是Node社区中最著名的模块。那些对创建实时Web程序感 兴趣，但从没听说过Node的人，一般迟早会听说 Socket.IO，然后他们会被它带到Node中。Socket.IO 允许你用服务器和客户端之间的双向通讯通道编写实时的Web程序。
# 最简单的，Socket.IO有一个API跟WebSocket API(http://www.websocket.org)很像，但给那 些还没有这种特性的较老浏览器准备了一个内置的备选方案。Socket.IO还为广播、易失性消息， 以及很多特性提供了便利的API。这些特性使得Socket.IO在基于Web的浏览器游戏、聊天程序和 流媒体应用中非常流行。
# HTTP是无状态协议，也就是说客户端只能向服务器发起单个的、短命的请求，并且服务器 也没有真正意义上的已连接的或断开连接的用户。这些限制推动了WebSocket协议的标准化工作， 为浏览器指定了一种维持到服务器的全双工连接的办法，允许双方同时发送和接受数据。借助 WebSocket API可以创建一种全新的，利用客户端和服务器之间的实时通讯的Web程序。
# WebSocket协议的问题是它还没最终定稿，尽管有些浏览器已经开始装备WebSocket了，
# 但是还有很多老版浏览器，特别是IE。为了解决这个问题，当浏览器可以使用 WebSocket时， Socket.IO就使用它，而在老版的浏览器中，则借助其他特定的浏览器技巧模拟WebSocket的行为。
**启动**
node demo1/2.js

**浏览**
浏览器中打开： http://localhost:8080/

## demo1 启动一个微型的socket 程序，实现实时更新服务器时间

## demo2 socket + express 监测css文件的变化 浏览器自动刷新
