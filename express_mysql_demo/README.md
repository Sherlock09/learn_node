<!--
 * @Author: zhangxiangyi
 * @Date: 2020-05-17 14:19:36
 * @LastEditTime: 2020-05-17 14:32:06
 * @LastEditors: Please set LastEditors
 * @Description: a express + mysql demo
 * @FilePath: /learn_node/express_mysql_demo/README.md
--> 

# 一个使用express + mysql 的学生成绩录入demo

# 可以熟悉的基本点： express mysql 基本操作命令

# 初始化时 express -e student -e 是使用了ejs 模版引擎 

**初始化**

npm install 

**连接mysql并创建对应的student表**
CREATE DATABASE student;

USE student;

CREATE TABLE student(
    ID INT KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL UNIQUE,
    chinese INT NOT NULL,
    english INT NOT NULL,
    math INT NOT NULL
);

# ext