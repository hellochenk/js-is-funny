import * as Rx from 'rxjs/Rx';
import { BaseService } from '../../service/service'
const service = new BaseService()

export const fetch = () => {
  let fetch = Rx.Observable.create(async oberver => {
    let resp = await service.request('search')
    oberver.next(resp)
  })
  
  fetch
    .map(e => {
      console.log(e)
      return e
    })
    .subscribe({
      next: (resp) =>{
        console.log(resp)
        return resp
      }
    })
}

let subject = new Rx.Subject()

subject.subscribe({
  next: val => console.log('next: ', val),
  error: err => console.log('error:', err),
  complete: () => console.log('finished')
})

subject.next(1)
subject.next(2)
subject.next(3)
subject.complete(1)

export default () => (123)
