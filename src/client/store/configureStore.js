import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
// import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers.js'

const sagaMiddleware = createSagaMiddleware()
import rootSaga from '../modules/rootSaga.js'

const mylogger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const loggerMiddleware = createLogger()

const enhancers = [
  sagaMiddleware,
  loggerMiddleware
]

export default function configureStore(preloadedState) {
  let store = createStore(
    rootReducer(),
    preloadedState,
    applyMiddleware(...enhancers)
  )
  store.asyncReducers = {}

  sagaMiddleware.run(rootSaga)
  return store
}
// import { applyMiddleware, compose, createStore } from 'redux'
// import thunk from 'redux-thunk'
// import { browserHistory } from 'react-router'
// import makeRootReducer from './reducers'
// import { updateLocation } from './location'


// export default (initialState = {}) => {

//   // const middleware = [thunk]
//      const middleware = []

//   const enhancers = []
//   if (__DEV__) {
//     const devToolsExtension = window.devToolsExtension
//     if (typeof devToolsExtension === 'function') {
//       enhancers.push(devToolsExtension())
//     }
//     middleware.push(logger, sagaMiddleware)
//   }

//   const store = createStore(
//     makeRootReducer(),
//     initialState,
//     compose(
//       applyMiddleware(...middleware),
//       ...enhancers
//     )
//   )
//   store.asyncReducers = {}

//   sagaMiddleware.run(routerSaga)

//   // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
//   store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

//   if (module.hot) {
//     module.hot.accept('./reducers', () => {
//       const reducers = require('./reducers').default
//       store.replaceReducer(reducers(store.asyncReducers))
//     })
//   }

//   return store
// }
