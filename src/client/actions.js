export const ADD_DOTO = 'ADD_DOTO'
export const DEL_TODO = 'DEL_TODO'
export const GET_TODO = 'GET_TODO'

export const getlsit = () => {
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