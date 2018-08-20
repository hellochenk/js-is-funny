
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

const oba$ = interval(1000).pipe(take(4))
const obb$ = interval(2000)


const obc$ = interval(3000)

const myOb$ = zip(
  oba$,
  obb$,
  obc$
)

myOb$.subscribe(val => console.log('subscribe --->', val))
