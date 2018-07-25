import * as Rx from 'rxjs/Rx';
import { BaseService } from '../../service/service'
const service = new BaseService()

var foo = Rx.Observable.create(function (observer) {
  console.log('Hello');
  observer.next(42);
});

foo.subscribe(function (x) {
  console.log(x);
});
foo.subscribe(function (y) {
  console.log(y);
});

console.log('before');
console.log(foo.call());
console.log('after');

export default () => (123)
