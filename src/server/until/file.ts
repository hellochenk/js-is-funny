// const fs = require('fs')
import * as fs from 'fs'

/**
 * 读取文件方法
 * @param  {string} 文件本地的绝对路径
 * @return {string|binary} 
 */
function file ( filePath:any ) {

 let content = fs.readFileSync(filePath, 'binary' )
 return content
}

export { file }