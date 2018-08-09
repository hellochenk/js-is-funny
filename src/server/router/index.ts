import { readdirSync } from "fs";
import { resolve } from 'path';
import { routerType } from './config'

const getRouters = async () => {
  try{
    let files = await readdirSync(resolve(__dirname,'./routes'))
    // console.log('filesfilesfilesfilesfiles',files)
    // 引入所有 route setting
    let routersArr:routerType[] = []

    await files.map(file => {
      let obj = require(resolve(__dirname, `./routes/${file}`))
      routersArr.push(...obj.default.routes)
    })

    // console.log(routersArr)
    return routersArr;
  } catch(e){
    console.log('err', e)
    return []
  }
}

export  { getRouters }