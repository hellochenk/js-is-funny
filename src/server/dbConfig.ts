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

  let List = await sequelize.define('todo_list', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: Sequelize.STRING(100),
    type: Sequelize.STRING(100)
  })

  sequelize.sync()

  db =  { sequelize, List };
}

initDb()

export function getDb() {
  return db
}
