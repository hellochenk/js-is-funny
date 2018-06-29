import * as Koa from 'koa'
import * as Router from 'koa-router'
// import { getDb } from './db/index'
import { getRouters } from './router'
import { resolve } from 'path'
import { router } from './router/config'

const port:number = 9990;
const router = new Router();
const posts = new Router();

const addRouter = async (app:Koa) => {
  let routerArr:router[] = await getRouters()

  routerArr.length&&routerArr.map(item => {
    const { name, path, method, func, lib } = item
    let obj = require(resolve(__dirname, `${lib}`))
    // console.log(item)
    // posts['post']
    // console.log(name, func, obj)
    posts[method](path, obj[func])
    // console.log(posts[method](name,func))
  })

  // posts.post('/test', async (ctx) => {
  //   const db = getDb()
  //   let resp = await db.Employee.create({
  //     name:'chenk',
  //     title:'haha'
  //   })
  //   if(resp){
  //     console.log(resp);
  //     ctx.response.body = { status: 'cuccess'}
  //   }
  // })
  
  router.use('/api', posts.routes(), posts.allowedMethods());

  app
    .use(router.routes())
  // .use(router.allowedMethods());
  return app
}

export { addRouter, port }