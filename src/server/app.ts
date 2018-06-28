import { addRouter, port } from './initRouter'
import { createsocket } from './websocket/websocket'

let app:any,server:any

const init = async () => {
  try {
    app = await addRouter() // init

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