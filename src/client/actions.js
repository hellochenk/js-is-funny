import { GET_TODO, ADD_DOTO, DEL_TODO } from './store/setting'

export const getlist = () => {
  return {
    type: GET_TODO
  }
}

export const addlist = (payload) => {
  return {
    type: ADD_DOTO,
    payload
  }
}

export const deletelist = (payload) => {
  return {
    type: DEL_TODO,
    payload
  }
}