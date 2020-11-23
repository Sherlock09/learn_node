<!--
 * @Author: your name
 * @Date: 2020-05-14 18:02:15
 * @LastEditTime: 2020-05-14 18:08:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn_node/connect_demo/README.md
 -->

# Connect是一个框架，它使用被称为中间件的模块化组件，以可重用的方式实现Web程序中的 逻辑。在Connect中，中间件组件是一个函数，它拦截HTTP服务器提供的请求和响应对象，执行 逻辑，然后或者结束响应，或者把它传递给下一个中间件组件。Connect用分派器把中间件“连 接”在一起。

# Express框架上，因为它就是构建在Connect上 的扩展，添加了更多高层的糖衣。看完这一章，你会对Connect中间件的工作机制

# 最新的express 已经重写了connect 貌似

# Connect的工作机制

# 在Connect中，中间件组件是一个JavaScript函数，按惯例会接受三个参数:一个请求对象， 一个响应对象，还有一个通常命名为next的参数，它是一个回调函数，表明这个组件已经完成 了它的工作，可以执行下一个中间件组件了。
# 中间件的概念最初是受到了Ruby的Rack框架的启发，它有一个非常相似的模块接口，但由 于Node的流特性，它的API与其不同。中间件组件很棒，因为它们小巧、自包含，并且可以在整 个程序中重用。
