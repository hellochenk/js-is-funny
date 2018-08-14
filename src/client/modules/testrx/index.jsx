import React from 'react'
import * as Rx from 'rxjs/Rx';
import { interval } from 'rxjs/observable/interval';
import { mapTo, startWith, scan, filter, map, take, combineAll, toArray, tap } from 'rxjs/operators';
import { timer } from 'rxjs/observable/timer';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { combineLatest } from 'rxjs/observable/combineLatest';

class Ha extends React.Component{
  btn1 = React.createRef()
  btn2 = React.createRef()

  state = {
    a: 'btn1',
    b: 'btn2',
    common: ''
  }

  componentDidMount() {
    let a = this.btn1
    let b = this.btn2
    let a$ = this.createBtnAbserverable(a, 'a')
    let b$ = this.createBtnAbserverable(b, 'b')

    let common$ = combineLatest(a$, b$).pipe(
      map(([a,b]) => a + b )
    ).subscribe(val => this.setState({
      common: val
    }))
  }

  createBtnAbserverable = (dom, a) => {
    let common = fromEvent(dom, 'click').pipe(
      // 将每次点击映射成1
      mapTo(1),
      startWith(0),
      // 追踪运行中的总数 
      scan((acc, curr) => acc + curr),
      // 为适当的元素设置 HTML
      // tap(setHtml(`${id}Total`))
      tap(val => this.setState({
        [a]: val
      }))
    )
    return common
  }

  render() {
    const { a, b, common } = this.state
    return (
      <div>
        <button ref={val => this.btn1 = val}>{a}</button>
        <button ref={val => this.btn2 = val}>{b}</button>
        <p>{common}</p>
      </div>
    )
  }
}

export default Ha
