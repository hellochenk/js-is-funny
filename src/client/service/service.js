const $ = require('jquery');

class BaseService {
  request = (url, param) => {
    return new Promise((res,rej) => {
      $.ajax({
        url: `http://localhost:9990/api/${url}`,
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify(param),
        method:'POST',
        
        success: (resp) => {
          // console.log(resp)
          res(resp)
        },
        fail: (err) => {
          rej(err)
        }
      })
    })    
  }
}

export { BaseService }