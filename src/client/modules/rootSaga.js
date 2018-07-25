import { fork, all  } from 'redux-saga/effects'
import todoListSaga from './todoList/todolist.saga'

function* rootSaga(){
  yield all([
    fork(todoListSaga)
  ])
} 

export default rootSaga;