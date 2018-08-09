import * as Rx from 'rxjs/Rx';
import { BaseService } from '../../service/service'
// const service = new BaseService()
// rx must have data souces --->

let subject = new Rx.Subject()
var source = Rx.Observable.from([1, 2, 3]);

// source 是observerable对象，调用multicast 传入subject，订阅信息, 返回一个类似observerable对象
// multicast 操作符 
var multicasted = source.multicast(subject);
// source.multicast(submsgb);


multicasted.subscribe({
  next: val => console.log('a', val)
})

multicasted.subscribe({
  next: val => console.log('b', val)
})

multicasted.connect()



export default () => (123)
