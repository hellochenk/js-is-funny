import * as Sequelize from 'sequelize'
import fs, { readdirSync } from 'fs'
import { resolve } from 'path'
let db:any = {};

const initDb = async () => {
  let sequelize = new Sequelize('mydb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 50,
      min: 0,
      idle: 10000
    },
    storage: 'path/to/database.sqlite'
  });

  let files = await readdirSync(resolve(__dirname,'models'))

  // console.log('startDbstartDbstartDb:',files)

  files.map(file => {
    let model = sequelize.import(resolve(__dirname, `./models/${file}`))
    // console.log('sequelize...................................',model)
    db[model.name] = model
  })

  // let List = await sequelize.import(__dirname + "/model/todolist")
  // let Employee = await sequelize.import(__dirname + "/model/employee")

  // await sequelize.sync()

  // db =  { sequelize };
  return sequelize
}

const startDb = async () => {
  let client = await initDb()
  client.sync()
}

const getDb = () => {
  return db  
} 

export { startDb, getDb }
