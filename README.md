# js-is-funny
let's study react redux node koa

### client端
主要使用 react, redux, react-router <br/>
目前完成 todolist demo, 数据来自服务端请求, <br/>
todo:redux控制状态 & router split<br/>

### server端
主要使用 koa, koa-router, sequelize <br/>
目前完成解耦工作, <br/>
新增api接口需要在/src/server/router/routes 中增加接口定义, <br/>
在 /src/server/controllers 中增加借口处理逻辑 <br/>
并在/src/server/db/models 中定义表结构 <br/>

### 要使项目正常运行,我们需要下载安装好一个数据库,推荐mysql

### 启动服务
npm run server

### 启动视图
npm run start
