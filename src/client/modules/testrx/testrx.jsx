// this is test rx
import { take, map, mapTo, startWith, scan, delay, concatAll } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { interval } from 'rxjs/observable/interval';
import { concat } from 'rxjs/observable/concat';

const samplePromise = val => new Promise(resolve => resolve(val));

const source = interval(2000);

const example = source.pipe(
  map(val => samplePromise(val)),
  // 合并解析过的 promise 的值
  concatAll()
);

// example.subscribe(val => 
//   console.log('Example with Promise:', val)
// )

