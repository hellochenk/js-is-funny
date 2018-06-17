import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as logger from 'koa-logger'
import * as cors from 'koa2-cors'
// var cors = require('koa2-cors');
// import * as Sequelize from 'sequelize'
// import { Config } from './dbConfig'
const port:number = 9990;
// console.log(Config.cookieTime())
let app = new Koa();
let router = new Router();

// var sequelize = new Sequelize('mydb', 'root', '123456', {
//   host: 'localhost',
//   dialect: 'mysql',
//   pool: {
//     max: 50,
//     min: 0,
//     idle: 10000
//   },
//   storage: 'path/to/database.sqlite'
// });

// const User = sequelize.define('user2', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });
// force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//     firstName: 'chenkang',
//     lastName: 'wuhan'
//   });
// });
// User.findAll().then(users => {
//   console.log(users)
// })
router.get('/',(ctx:any, next:any)=>{
  if (ctx.request.accepts('xml')) {
    ctx.response.type = 'xml';
    ctx.response.body = '<data>Hello World</data>';
  } else if (ctx.request.accepts('json')) {
    ctx.response.type = 'json';
    ctx.response.body = { data: 'Hello World' };
  } else if (ctx.request.accepts('html')) {
    ctx.response.type = 'html';
    ctx.response.body = '<p>Hello World</p>';
  } else {
    ctx.response.type = 'text';
    ctx.response.body = 'Hello World';
  }
})
router.get('/user',(ctx:any, next:any)=>{
  ctx.body = 'this is user'
})

app.use(cors())
app.use(logger())
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, '0.0.0.0', () => {
  console.log(`app started at port ${port}...`)
})
