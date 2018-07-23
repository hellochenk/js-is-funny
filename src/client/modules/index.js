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

export const createRouter = (store) => {
  const routerArr = [
    {
      path: "/todolist",
      component: Loadable({
        loading: Loading,
        loader: (a) => {
          injectReducer(store, "todoList", todoList)
          return import('./todoList/todolist.jsx')
        } 
      })
    },{
      path: "/socket",
      component: Loadable({
        loading: Loading,
        loader: (a) => {
          return import('./socket/socket.jsx')
        } 
      })
    }
  ];
  return routerArr; 
} 
