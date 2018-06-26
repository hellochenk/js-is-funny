import io from 'socket.io-client';

class createws{
  constructor(path){
    let setting = {
      autoConnect: false
    }
    if(path){
      setting = {...setting, path}
    }
    console.log('setting------------->', setting)
    this.io = io('http://localhost:9993', {...setting})
    this.io.on('connect', () => {
      console.log('on connect ..........')
      // this.sendmsg('get connection ..........')
    })

    this.io.on('messageFromServer', (data) => {
      console.log('get data from server:', data)
    })

    this.io.on('disconnect', () => {
      // this.start()
      console.log('ws closed ..........')
    })

    this.io.on('connect_error', () => {
      console.log('on connect_error')
    })

    this.io.on('testRoom', data => {
      console.log('get data from testRoom:', data)
    })

    // this.io.
  }

  start = async () => {
    await this.io.open()
  }

  close = async () => {
    await this.io.close()
  }

  sendmsg = async (payload) => {
    // await this.io.send(payload)
    await this.io.emit('messageFromClient', payload)
  }

  testRoomFromClient = async payload => {
    await this.io.emit('testRoomFromClient', payload)
  }
} 

export { createws }