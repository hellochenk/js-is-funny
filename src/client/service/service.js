// const $ = require('jquery');
import axios from 'axios'

class BaseService {
  request = (url, param) => {
    return new Promise((res,rej) => {
      axios({
        url: `http://localhost:9990/api/${url}`,
        dataType: 'json',
        data: param,
        method:'POST'
      }).then((resp)=>{
        console.log('1111111111',resp)
        if(resp.status === 200){
          res(resp.data)
        }else{
          rej(resp)
        }
      })
    })    
  }
}

export { BaseService }