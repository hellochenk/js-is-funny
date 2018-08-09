// const fs = require('fs')
// const mimes = require('./mimes')
import * as fs from 'fs'
import { mimes } from './mime'

/**
 * 遍历读取目录内容（子目录，文件名）
 * @param  {string} reqPath 请求资源的绝对路径
 * @return {array} 目录内容列表
 */
const walk = (reqPath: any) => {
  let files = fs.readdirSync(reqPath);
  let dirList: any[] = [], fileList: any[] = [];

  files.map((item, i) => {
    let itemArr = item.split("\.");
    let itemMime = (itemArr.length > 1) // js/css/ts....
      ? itemArr[itemArr.length - 1] 
      : "undefined";
    
    if (typeof mimes[itemMime] === "undefined") {
      dirList.push(files[i]);
    } else {
      fileList.push(files[i]);
    }
  })

  // for (let i = 0, len = files.length; i < len; i++) {
  //   let item = files[i];
  //   let itemArr = item.split("\.");
  //   let itemMime: string = (itemArr.length > 1) ? itemArr[itemArr.length - 1] : "undefined";

  //   if (typeof mimes[itemMime] === "undefined") {
  //     dirList.push(files[i]);
  //   } else {
  //     fileList.push(files[i]);
  //   }
  // }
  let result = dirList.concat(fileList);
  return result;
};

export { walk }