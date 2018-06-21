import { combineReducers } from 'redux'
import { ADD_DOTO, DEL_TODO, GET_TODO } from './setting'

const todoList = (state=[],action) => {
  switch (action.type) {
    case GET_TODO:
      // console.log(action.data)
      return state
    case ADD_DOTO:
      return action.payload
    default:
      return state
  }
}
const rootReducer = combineReducers({
  todoList
})
export default rootReducer