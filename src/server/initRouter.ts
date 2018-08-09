import * as Koa from 'koa'
import * as Router from 'koa-router'
// import { getDb } from './db/index'
import { getRouters } from './router'
import { resolve } from 'path'
import { routerType } from './router/config'
var fetch = require("node-fetch");

const port:number = 9990;
const router = new Router();
const posts = new Router();

const addRouter = async (app:Koa) => {
  let routerArr:routerType[] = await getRouters()

  routerArr.length && routerArr.map(item => {
    const { path, method, func, lib } = item;
    let obj = require(resolve(__dirname, `${lib}`));

    posts[method](path, obj[func]);
  })

  router.use('/api', posts.routes(), posts.allowedMethods());
  app
    .use(router.routes())
  // .use(router.allowedMethods());
  return app
}

export { addRouter, port }