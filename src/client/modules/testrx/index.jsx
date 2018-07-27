import * as Rx from 'rxjs/Rx';
import { BaseService } from '../../service/service'
const service = new BaseService()

// 
let fetch = Rx.Observable.create(async oberver => {
  let resp = await service.request('search')
  oberver.next(resp)
})

fetch.subscribe({
  next: (resp) =>{
    console.log(resp)
  }
})

export default () => (123)
