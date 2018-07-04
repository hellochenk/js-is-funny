import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import todoListSaga from './todoList/todolist.saga.js'

function* rootSaga(){
  yield [
    fork(todoListSaga)
  ]
} 

export default rootSaga;