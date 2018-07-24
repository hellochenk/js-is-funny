import { todoListType, initData } from './setting'

const todoList = (state = initData, action) => {
  switch (action.type) {
    case todoListType.SAVE_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export { todoList }

// const initialState = []
// const todoReducer = (state = initialState, action) => {

//   return handler ? todoList(state, action) : state
// }

// export default todoReducer