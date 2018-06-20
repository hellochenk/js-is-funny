import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as logger from 'koa-logger'
import * as cors from 'koa2-cors'
import * as bodyparser from 'koa-bodyparser'
import { readdirSync, readFileSync } from 'fs';
import * as path from 'path'
import { getDb} from './dbConfig'

const port:number = 9990;
const app = new Koa();
const router = new Router();
const posts = new Router();

posts.post('/addtodo',async (ctx, next) => {
  const db = getDb()
  let { text } = ctx.request.body
  console.log('111111111111111111',ctx.request.body)
  await db.List.create({
    text: text,
    type: '0'
  })
  ctx.response.body = JSON.stringify({status:'0'})
});

posts.post('/search',async (ctx, next) => {
  console.log('this is search todo')
  const db = getDb()
  let data = await db.List.findAll()
  let resp = {
    data,
    status: '0'
  }
  ctx.response.body = JSON.stringify(resp)
});

posts.post('/deltodo',async (ctx, next) => {
  let { id } = ctx.request.body
  const db = getDb()
  let resp = await db.List.destroy({
    where: {
      id: id
    }
  })
  if(resp){
    ctx.response.body = JSON.stringify({status: '0'})
  }
});


router.use('/api', posts.routes(), posts.allowedMethods());
app.use(cors())
app.use(logger())
app.use(bodyparser())
app.use(router.routes())
  // .use(router.allowedMethods());

app.listen(port, '0.0.0.0', () => {
  console.log(`app started at port ${port}...`)
})
