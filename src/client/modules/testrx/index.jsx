import React from 'react'
// import * as Rx from 'rxjs/Rx';
// import { interval } from 'rxjs/observable/interval';
import { mapTo, startWith, scan, filter, map, take, combineAll, toArray, tap } from 'rxjs/operators';
// import { timer } from 'rxjs/observable/timer';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { combineLatest } from 'rxjs/observable/combineLatest';

import './testrx'
// use rx control state...
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
      mapTo(1),
      startWith(0),
      scan((acc, curr) => acc + curr),
      tap(val => this.setState({
        [a]: val
      }))
    )
    return common
  }

  render() {
    const { a, b, common } = this.state
    return (
      <div style={{padding: '10px'}}>
        <button style={{border:'none',background:'#ccc',color: '#fff',marginRight:'10px'}} ref={val => this.btn1 = val}>{a}</button>
        <button style={{border:'none',background:'#ccc',color: '#fff'}} ref={val => this.btn2 = val}>{b}</button>
        <p>{common}</p>
      </div>
    )
  }
}

export default Ha
