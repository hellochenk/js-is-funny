import { combineReducers } from 'redux'
import { ADD_DOTO, DEL_TODO, GET_TODO } from './actions'

const todoList = (state=[],action) => {
  switch (action.type) {
    case GET_TODO:
      return action.payload
    default:
      return state
  }
}

const visibilityFilter = (state = '', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const app = combineReducers({
  todoList,
  visibilityFilter
})
​
export default app