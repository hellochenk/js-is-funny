import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Sequelize from 'sequelize';
import { Config } from './dbConfig';

let port:number = 9990;

console.log(Config.cookieTime())

let app = new Koa();
let router = new Router();

router.get('/',(ctx:any, next:any)=>{
  ctx.body = 'use ts in koa'
})

var sequelize = new Sequelize('mydb', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 50,
    min: 0,
    idle: 10000
  },
  storage: 'path/to/database.sqlite'
});

const User = sequelize.define('user2', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});
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
router.get('/user',(ctx:any, next:any)=>{
  ctx.body = 'this is user'
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, '0.0.0.0', () => {
  console.log(`app started at port ${port}...`)
})
