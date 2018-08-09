import { router, method } from '../config'

const base = {
  lib: 'controllers/index.controller'
}

const todoList:router[] = [
  {
    name: 'addtodo',
    path: '/index',
    method: method.get,
    func: 'getIndex'
  }
];

export default {
  // todo list module method
  routes: todoList.map(i => ({...i,...base})),
  // http request path
  prefix: '/'
}

