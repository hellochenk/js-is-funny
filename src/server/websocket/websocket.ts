import * as ioServer from 'socket.io'
import * as http from 'http'

let io:any;

const createsocket = async (app:any) => {

  io = ioServer(app);

  // io = ioServer('9993', {
  //   path: '/test'
  // })
  // io.attach(app)

  io.on('connection', (socket:any) => {
    console.log('start connection .................',socket.id)
    // socket.use((data:any, next:any) => {
    //   console.log('data------------------>', data)
    //   next()
    // })
    // socket.join('testRom1')

    socket.on('test', (data:any) => {
      console.log('vvvvvvvvv on test vvvvvvvvv')
      console.log(`^^^^^^^^^ ${data} ^^^^^^^^^^`)
    })

    socket.on('disconnect', () => {
      console.log('close connect ..........')
    })

    socket.on('messageFromClient', (data:any) => {
      console.log('data from client :', socket.id, data)
      socket.emit('messageFromServer',`get data --> ${data}`)
      // socket.to(socket.id).emit('messageFromServer',data)
    })

    socket.on('testRoomFromClient', (data:any) => {
      socket.to('testRom1').emit('testRoom',data)
    })

  })

}



export { createsocket }