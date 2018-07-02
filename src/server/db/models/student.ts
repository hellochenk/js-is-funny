module.exports = (sequelize:any, DataTypes:any) => {
  return sequelize.define('students', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING(100),
    sex: {
      type: DataTypes.ENUM,
      values: ['1', '2'] // 1 male/ 2 female
    }, 
    brithday: DataTypes.STRING(100),

    number: DataTypes.STRING(100), // 学号
    level:DataTypes.STRING(100), // 年级
    belong: DataTypes.STRING(100), // 归属, 班主任 编号
    status: DataTypes.STRING(100),// 状态
    desc: DataTypes.STRING(100) // 描述
  })
}
