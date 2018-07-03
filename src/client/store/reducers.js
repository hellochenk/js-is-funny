import { combineReducers } from 'redux'
import { ADD_DOTO, DEL_TODO, GET_TODO } from './setting'
import locationReducer from "./location";

// const todoList = (state=[],action) => {
//   switch (action.type) {
//     case GET_TODO:
//       // console.log(action.data)
//       return state
//     case ADD_DOTO:
//       return action.payload
//     default:
//       return state
//   }
// }
// const rootReducer = combineReducers({
//   todoList
// })

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

// export default makeRootReducer

export default makeRootReducer