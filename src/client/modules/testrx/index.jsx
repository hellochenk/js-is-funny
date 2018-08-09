import * as Rx from 'rxjs/Rx';
import { BaseService } from '../../service/service'
// const service = new BaseService()

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
