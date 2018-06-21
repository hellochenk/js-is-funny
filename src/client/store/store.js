import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers'

const mylogger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const getStore = () =>{
  return createStore(
    rootReducer,
    applyMiddleware(logger))
}
export default getStore()