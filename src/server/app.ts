import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as cors from 'koa2-cors'
import * as bodyparser from 'koa-bodyparser'
import { addRouter, port } from './initRouter'
import { createsocket } from './websocket/websocket'
import { startDb } from './db/index'

const app = new Koa;

const init = async () => {
  try {
    await startDb()

    app
      .use(cors())
      .use(logger())
      .use(bodyparser())
    
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