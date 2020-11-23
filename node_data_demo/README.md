<!--
 * @Author: zhangxiangyi
 * @Date: 2020-05-13 23:38:09
 * @LastEditTime: 2020-05-21 11:16:50
 * @LastEditors: Please set LastEditors
 * @Description: about node data module
 * @FilePath: /learn_node/node_data_demo/README.md
 -->
# node 中的数据模块 

# 包括并且不限于 mysql 内存和文件系统

# 几乎所有的程序，不管是不是基于Web的，都需要某种类型的数据存储机制，用Node构建的 程序也不例外。选择合适的存储机制取决于以下五个因素
# 1. 存储什么数据
# 2. 为了保证性能，要有多快的数据读取和写入速度
# 3. 有多少数据
# 4. 要怎么查询数据
# 5. 数据要保存多久，对可靠性有什么要求
# 有些机制支持结构复杂的数据的长期持久化，并且有强大的搜索功能，但要承担昂贵的性能 成本，所以有时并不是最好的选择。同样，把数据放在服务器内存中能得到最好的性能，但可靠 性不强，如果程序重启，或服务器断电，数据就会丢失
#  存储数据而无需安装和配置DBMS;
#  用关系型数据库存储数据，具体说就是MySQL和PostgreSQL;
#  用NoSQL数据库存储数据，具体说就是Redis、MongoDB和Mongoose。


# Redis非常适合处理那些不需要长期访问的简单数据存储，比如短信和游戏中的数据。Redis 把数据存在RAM中，并在磁盘中记录数据的变化