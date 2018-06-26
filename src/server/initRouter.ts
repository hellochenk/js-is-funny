import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as logger from 'koa-logger'
import * as cors from 'koa2-cors'
import * as bodyparser from 'koa-bodyparser'
import { getDb } from './db/index'

const port:number = 9990;
const app = new Koa();
const router = new Router();
const posts = new Router();

const addRouter = async () => {
  posts.post('/addtodo',async (ctx, next) => {
    const db = getDb()
    let { text } = ctx.request.body
    await db.List.create({
      text: text,
      type: '0'
    })
    ctx.response.body = JSON.stringify({status:'0'})
  });

  posts.post('/search',async (ctx, next) => {
    const db = getDb()
    let data = await db.List.findAll({
      attributes: ['id', 'text', 'type']
    })
    let resp = {
      data,
      status: '0'
    }
    ctx.response.body = JSON.stringify(resp)
  });
  
  posts.post('/deltodo',async (ctx, next) => {
    let { id } = ctx.request.body
    const db = getDb()
    // let result = await db.List.find({
    //   where: {
    //     id: id
    //   }
    // })
    let result = await db.List.destroy({
      where: {
        id: id
      }
    })
    if(result){
      ctx.response.body = JSON.stringify({status: '0'})
      // ctx.response.body = JSON.stringify(result)
    }
  });
  
  posts.post('/test', async (ctx) => {
    const db = getDb()
    let resp = await db.Employee.create({
      name:'chenk',
      title:'haha'
    })
    if(resp){
      console.log(resp);
      ctx.response.body = { status: 'cuccess'}
    }
  })
  
  router.use('/api', posts.routes(), posts.allowedMethods());
  
  app
    .use(cors())
    .use(logger())
    .use(bodyparser())
    .use(router.routes())
  // .use(router.allowedMethods());

  return app
}

export { addRouter, port }