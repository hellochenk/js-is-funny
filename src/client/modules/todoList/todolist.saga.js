import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { message } from 'antd'
import { getlist } from './actions'
import { todoListType } from './setting'
import { BaseService } from '../../service/service'
const service = new BaseService()

function* addListSaga(actions) {
  try {
    let resp = yield call(service.request, 'addtodo', actions.payload)
    if(resp.status === '0') {
      message.success('添加成功')
      yield put(getlist())
    }
  } catch (error) {
    console.log(error)
  }
}

function* delListSaga(actions){
  try {
    const { id } = actions.payload
    let resp = yield call(service.request, 'deltodo', {id})
    if(resp.status === '0') {
      message.success('删除成功')
      yield put(getlist())
    }
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

function* queryListSaga() {
  try {
    let resp = yield call(service.request, 'search')
    if(resp.status === '0') {
      yield put({type: todoListType.SAVE_DATA, payload: resp.data});
    }
    console.log(resp)
  } catch (error) {
    console.log(error)
  }
}

function* todoListSaga() {
  yield takeLatest(todoListType.GET_TODO, queryListSaga);
  yield takeLatest(todoListType.ADD_DOTO, addListSaga);
  yield takeLatest(todoListType.DEL_TODO, delListSaga);
  yield takeLatest(todoListType.UPDATE_TODO, updataListSaga);
}

export default todoListSaga;
