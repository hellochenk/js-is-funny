import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import * as todo from './actions'

import TodoListComponent from './modules/todoList/todolist.jsx'

import store from './store/store'

const mapStateToProps = state => {
  let stas = {}
  // const { todoList } = state
  for(let a in state){
    stas[a] = state[a]
  }
  return stas
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
         <Node />
      </Provider>
    )
  }
}

const dom = document.getElementById('root')

ReactDOM.render( <Container/> , dom);