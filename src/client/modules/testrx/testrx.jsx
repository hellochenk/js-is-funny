
import { take, 
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
  defaultIfEmpty
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

const a = interval(1000)

a.pipe(map(val => `a: ${val}`),take(10)).subscribe(val => console.log(val))
a.pipe(map(val => `b: ${val}`),take(5)).subscribe(val => console.log(val))

// 输出: 'Complete!'
const subscribe = empty().subscribe({
  next: () => console.log('Next'),
  complete: () => console.log('Complete!')
});