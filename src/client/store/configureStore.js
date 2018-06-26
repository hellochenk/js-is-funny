import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers.js'

const mylogger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  let store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )

  // if(module.hot){
  //   console.log('hot open................')
  // }else{
  //   console.log('no hot.................')
  // }

  return store
}