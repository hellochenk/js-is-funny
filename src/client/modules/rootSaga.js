import { fork } from 'redux-saga/effects'
import todoListSaga from './todoList/todolist.saga'

function* rootSaga(){
  yield [
    fork(todoListSaga)
  ]
} 

export default rootSaga;