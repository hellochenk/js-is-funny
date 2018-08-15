
import { take, 
  map, 
  mapTo, 
  startWith, 
  scan, 
  delay, 
  concatAll, 
  combineAll, 
  // merge, 
  mergeAll 
} from 'rxjs/operators';

import { of } from 'rxjs/observable/of';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { interval } from 'rxjs/observable/interval';
import { concat } from 'rxjs/observable/concat';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';

const source = interval(500).pipe(take(5));

/*
  interval 每0.5秒发出一个值。这个值会被映射成延迟1秒的 interval 。mergeAll 操作符接收一个可选参数
  以决定在同一时间有多少个内部 observables 可以被订阅。其余的 observables 会先暂存以等待订阅。
*/
// source : [0, 1, 2, 3, 4]

const example = source.pipe(
  // 在这个map中返回5个observerable->
  map(val => source.pipe(delay(1000), take(3))), 
  mergeAll()
).subscribe(val => console.log(val));
