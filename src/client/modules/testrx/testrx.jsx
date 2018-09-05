
import { 
  take, 
  map, 
  mapTo, 
  startWith, 
  scan, 
  delay, 
  concatAll, 
  combineAll, 
  // merge, 
  mergeAll ,
  every,
  defaultIfEmpty,
  mergeMap,
  catchError
} from 'rxjs/operators';

import { of } from 'rxjs/observable/of';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { interval } from 'rxjs/observable/interval';
import { race } from 'rxjs/observable/race';
import { concat } from 'rxjs/observable/concat';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { zip } from 'rxjs/observable/zip';
import { empty } from 'rxjs/observable/empty';
import { from } from 'rxjs/observable/from';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { fromPromise } from 'rxjs/observable/fromPromise';


// 基于输入来决定是 resolve 还是 reject 的示例 promise
const myPromise = willReject => {
  return new Promise((resolve, reject) => {
    console.log('schedule...')
    if (willReject) {
      reject('Rejected!');
    }
    resolve('Resolved!');
  });
};
// 先发出 true，然后是 false
const source = of(true, false);

// mergemap 预处理observerable 

const example = source.pipe(
  mergeMap(val =>
    fromPromise(myPromise(val)).pipe(
      // 捕获并优雅地处理 reject 的结果
      catchError(error => of(`Error: ${error}`))
    )
  )
);

// 输出: 'Error: Rejected!', 'Resolved!'
const subscribe = example.subscribe(val => console.log(val));