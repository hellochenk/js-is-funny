import { todoListType } from './setting'

export const getlist = () => {
  return {
    type: todoListType.GET_TODO
  }
}

export const saveList = payload => {
  return {
    type: todoListType.SAVE_DATA,
    payload
  }
}

export const addlist = (payload) => {
  return {
    type: todoListType.ADD_DOTO,
    payload
  }
}

export const deletelist = (payload) => {
  return {
    type: todoListType.DEL_TODO,
    payload
  }
}