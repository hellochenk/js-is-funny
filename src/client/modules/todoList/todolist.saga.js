import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import { GET_TODO, ADD_DOTO, DEL_TODO, UPDATE_TODO } from './setting'

import { BaseService } from '../../service/service'
const service = new BaseService()

function* addListSaga(actions){
  try {
    console.log('add list')
  } catch (error) {
    console.log(error)
  }
}

function* delListSaga(){
  try {
    console.log('del list')
  } catch (error) {
    console.log(error)
  }
}

function* updataListSaga(){
  try {
    console.log('update list')
  } catch (error) {
    console.log(error)
  }
}

function* queryListSaga(){
  try {
    console.log('query list')
  } catch (error) {
    console.log(error)
  }
}

// GET_TODO, ADD_DOTO, DEL_TODO, UPDATE_TODO

function* todoListSaga() {
  yield takeLatest("GET_TODO", queryListSaga);
  yield takeLatest("ADD_DOTO", addListSaga);
  yield takeLatest("DEL_TODO", delListSaga);
  yield takeLatest("UPDATE_TODO", updataListSaga);
}

export default todoListSaga;
