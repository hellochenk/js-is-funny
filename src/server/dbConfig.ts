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

  let Employee = sequelize.define('employee', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      get() {
        const title = this.getDataValue('title');
        // 'this' 允许你访问实例的属性
        return this.getDataValue('name') + ' (' + title + ')';
      },
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      set(val) {
        this.setDataValue('title', val.toUpperCase());
      }
    }
  });

  sequelize.sync()

  db =  { sequelize, List, Employee };
}

initDb()

export function getDb() {
  return db
}
