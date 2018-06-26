import { addRouter, port } from './initRouter'
import * as ioServer from 'socket.io'

let app:any,server:any;

const init = async () => {
  try {
    app = await addRouter() // init

    server = ioServer('9993', {
      path: '/test'
    })
    server.attach(app)

    server.on('connection', (socket:any) => {
      console.log('start connection .................')
      // socket.use((data:any, next:any) => {
      //   console.log('data------------------>', data)
      //   next()
      // })
      socket.join('testRom1')

      socket.on('test', (data:any) => {
        console.log('vvvvvvvvv on test vvvvvvvvv')
        console.log(`^^^^^^^^^ ${data} ^^^^^^^^^^`)
      })

      socket.on('disconnect', () => {
        console.log('close connect ..........')
      })

      socket.on('messageFromClient', (data:any) => {
        console.log('get data from client :', data)
        socket.emit('messageFromServer',`get data --> ${data}`)
      })

      socket.on('testRoomFromClient', (data:any) => {
        socket.to('testRom1').emit('testRoom',data)
      })

    })

    
    app.listen(port, '0.0.0.0', () => {
      console.log(`app started at port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

init()