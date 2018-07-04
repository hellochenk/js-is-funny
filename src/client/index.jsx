import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createRouter } from './modules/index.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import configureStore from './store/configureStore'
const store = configureStore({})
let routerArr = createRouter(store);

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component 
      {...props} 
      store={route.store} 
      routes={route.routes} 
    />}
  />
)

class Container extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Provider store={store}>
        <Router>
          <div>
            {
              routerArr.map((route,i) => <RouteWithSubRoutes key={i} {...route} store={store}/>)
            }
          </div>
        </Router>
      </Provider>
    )
  }
}

const dom = document.getElementById('root') 

ReactDOM.render( <Container/> , dom);

