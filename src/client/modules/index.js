// router split 
import React from 'react'
import Loadable from 'react-loadable';

import { injectReducer } from '../store/reducers.js'
import { todoList } from './todoList/reducers.js';

const Loading = (status, err) => (
  <div>
    now loading......
  </div>
)
// const createLazyLoader = (path) => (Loadable({
//   loading: Loading,
//   loader: (a) => {
//     console.log('aaaaaaaaaaa', a)
//     return import(path)
//   }
// }))

export const createRouter = (store) => {
  const routerArr = [
    {
      path: "/todolist",
      // component: createLazyLoader('./todoList/todolist.jsx')
      component: Loadable({
        loading: Loading,
        // loader: () => import('./todoList/todolist.jsx')
        loader: (a) => {
          // todo replace reducers //
          injectReducer(store, "todoList", todoList)
          return import('./todoList/todolist.jsx')
        } 
      })
    },{
      path: "/socket",
      component: Loadable({
        loading: Loading,
        // loader: () => import('./socket/socket.jsx')
        loader: (a) => {
          // todo replace reducers //

          return import('./socket/socket.jsx')
        } 
      })
    }
  ];
  return routerArr; 
} 
