enum method{
  post = 'post',
  get = 'get',
  del = 'del',
  update = 'put'
}

/**
 * @path 当前路由对应controller
 * @method 当前路由对应请求类型
 * @function 当前路由对应处理函数
 * @name 当前路由对应处理函数名
 */
interface routerType{
  path: string;
  method: 'get'|'post'|'del'|'put';
  func: string;
  name: string;
  lib?: string
}

export { 
  routerType, 
  method 
}