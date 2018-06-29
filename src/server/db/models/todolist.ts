module.exports = (sequelize:any, DataTypes:any) => {
  return sequelize.define('todo_list', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: DataTypes.STRING(100),
    type: DataTypes.STRING(100)
  })
}

  // let List = await sequelize.define('todo_list', {
  //   id: {
  //     type: Sequelize.INTEGER,
  //     primaryKey: true,
  //     autoIncrement: true,
  //   },
  //   text: Sequelize.STRING(100),
  //   type: Sequelize.STRING(100)
  // })