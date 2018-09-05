import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as cors from 'koa2-cors'
// import * as koaStatic from 'koa-static'
import * as bodyparser from 'koa-bodyparser'
import { addRouter, port } from './initRouter'
import { createsocket } from './websocket/websocket'
import { startDb } from './db/index'
// import * as content from './until/content'

const path = require('path')

const app = new Koa
const staticPath = './static'

const init = async () => {
  try {
    await startDb()
    
    app
      .use(cors())
      .use(logger())
      .use(bodyparser())
      // .use(koaStatic(
      //   path.join( __dirname, staticPath)
      // ))
    
    await addRouter(app) // init

    const httpServer = app.listen(port, '0.0.0.0', () => {
      console.log(`app started at port ${port}...`)
    })
    
    createsocket(httpServer)
    // var app = require('koa')();
  } catch (error) {
    console.log(error)
  }
}

init()