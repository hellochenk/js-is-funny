import { GET_TODO, ADD_DOTO, DEL_TODO, UPDATE_TODO } from './setting'

const todoList = (state=[], action) => {
  switch (action.type) {
    // case GET_TODO:
      // console.log(action.data)
      // return state
    case ADD_DOTO:
      return action.payload
    default:
      return state
  }
}
// const rootReducer = combineReducers({
//   todoList
// })
export { todoList }

// const initialState = []
// const todoReducer = (state = initialState, action) => {

//   return handler ? todoList(state, action) : state
// }

// export default todoReducer