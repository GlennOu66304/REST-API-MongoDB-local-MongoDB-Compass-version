# REST API MongoDB local + MongoDB Compass version
Run the demo:
cd to the project
npm install
启动： DEBUG=project:* npm start


## MongoDB Compass

## Connect the local MongoDB Data base to the MongoDB Conpass

Make sure the the mongdb is running in the backstage,then  
input the local address to the Mongocompoass

```
 mongodb://127.0.0.1:27017/
```

Then you can modify the local data in the mongoDB compass

# 使用 express 生成器，快速构建应用骨架

```
$ sudo npm install express-generator -g
express --view=pug myapp(项目名称)
cd myapp
npm install
启动： DEBUG=myapp:* npm start
```
If you do not want the"pug" file in the view file, then you can use the code below to generate a project:
```
express --no-view server
```
[8.1.1　初始化项目](https://weread.qq.com/web/reader/c7432440721c7eb2c74881fk398323202893988c7f885f0)  
Pay more attention that between the \* and :, there is no spaceing
[使用应用生成器](https://developer.mozilla.org/zh-CN/docs/learn/Server-side/Express_Nodejs/skeleton_website)

## 跨域设置

simply add the code below into the app.js

```
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8090");//项目上线后改成页面的地址
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});
```

[express 解决跨域问题](https://juejin.cn/post/6844903945656074248)

## express 获取 mongodb 数据

You need to add the data into the mongoDb first, then
retrive the data from the code  
1.use the termial mongo to add the data or use the mongocompass to add the data into the mongodb;
2.config the data format in the modals,  
3.retrive the data in the routes

## Resource

## Serize Modification:

1.[Mongodb 安装及环境搭建](https://juejin.cn/post/6844903878926532621)  
2.[mongodb 启动以及加入环境变量](https://juejin.cn/post/6844903878937280526)  
3.[使用 express 快速搭建后台服务](https://juejin.cn/post/6844903878958268429)  
4.[express 与 mongodb 之间的交互](https://juejin.cn/post/6844903878975029256)
