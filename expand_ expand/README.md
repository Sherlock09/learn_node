<!--
 * @File: 
 * @Author: zhangxiangyi
 * @Date: 2020-06-04 10:32:54
 * @Update: 
--> 
# 1. 引擎模版拓展
# 通过app.engine()

# 2. Express的拓展及框架

# 2.1 express-expose 可以把服务器端的js对象导到客户端 
# demo: res.expose(req.user, 'express.user');

# 2.2 express-resource 对路由做结构化处理、资源丰富的路由插件

# 路由有很多种做法，但express 默认提供的归根结底只是请求方法和路径，但可以在其上构建更高层的概念

# demo app.resource('user', require('./controller/user')) controller/user 内包含了 create、show、new等操作

# 2.3 内置express设定

# engine 默认模版引擎
# views 视图查找路径
# json replacer 相应JSON操作函数
# json spaces 用来对JSON响应格式化的空格数量
# jsonp callback 支持带res.json() 和res.send() 的JSONP
# trust proxy 信任反向代理
# view cache 缓存模版引擎函数