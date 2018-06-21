import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as todo from './actions'

import TodoListComponent from './modules/todoList/todolist.jsx'

import store from './store/store'

const mapStateToProps = state => {
  let stas = {}
  // const { todoList } = state
  for(let a in state){
    stas[a] = state[a]
  }
  return {store:stas}
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(todo, dispatch)
  }
}

let Node = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent)
// @connect(
//   mapStateToProps,
//   mapDispatchToProps
// )
class Container extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={Node} />
        </Router>
      </Provider>
    )
  }
}

const dom = document.getElementById('root')

ReactDOM.render( <Container/> , dom);