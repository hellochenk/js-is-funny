import * as Sequelize from 'sequelize'

let db:any = {};

const initDb = async () => {
  let sequelize = await new Sequelize('mydb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 50,
      min: 0,
      idle: 10000
    },
    storage: 'path/to/database.sqlite'
  });

  const List = await sequelize.import(__dirname + "/model/todolist")
  const Employee = await sequelize.import(__dirname + "/model/employee")

  sequelize.sync()

  db =  { sequelize, List, Employee };
}

initDb()

export function getDb() {
  return db
}
