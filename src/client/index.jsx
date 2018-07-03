import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import TodoListComponent from './modules/todoList/todolist.jsx'
import SocketComponent from './modules/socket/socket.jsx'


import configureStore from './store/configureStore'

const store = configureStore()

// loadcomponent = () => {
//   return import('./modules/todoList/todolist.jsx')
// }

class Container extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Provider store={store}>
        <Router>
        <div>
          <Route path="/todolist" component={TodoListComponent} />
          <Route path="/socket" component={SocketComponent} />
          </div>
        </Router>
      </Provider>
    )
  }
}

const dom = document.getElementById('root')

ReactDOM.render( <Container/> , dom);

