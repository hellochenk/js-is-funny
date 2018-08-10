import 'babel-polyfill';
import * as Rx from 'rxjs/Rx';
import * as _ from 'lodash';
if (process.env.NODE_ENV !== 'production') {
  window.Rx = Rx
  window._ = _
}