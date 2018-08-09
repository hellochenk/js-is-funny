import { routerType, method } from '../config'

const base = {
  lib: 'controllers/todolist.controller'
}

const todoList:routerType[] = [
  {
    name: 'addtodo',
    path: '/addTodo',
    method: method.post,
    func: 'addTodoList'
  },
  {
    name: 'deltodo',
    path: '/deltodo',
    method: method.post,
    func: 'deleteTodoList'
  },
  {
    name: 'updateTodo',
    path: '/updateTodo',
    method: method.post,
    func: 'upDateTodoList'
  },
  {
    name: 'search',
    path: '/search',
    method: method.post,
    func: 'searchTodoList'
  }
];

export default {
  // todo list module method
  routes: todoList.map(i => ({...i,...base})),
  // http request path
  prefix: '/app/todolist'
}

