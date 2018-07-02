module.exports = (sequelize:any, DataTypes:any) => {
  return sequelize.define('teachers', {
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

    number: DataTypes.STRING(100), // 教师编号
    level: DataTypes.STRING(100), // 级别
    start: DataTypes.STRING(100), // 入职年份
    subject: DataTypes.STRING(100), // 任职科目
    express: DataTypes.STRING(100), // 工作时间
    status: DataTypes.STRING(100), // 状态
    desc: DataTypes.STRING(100) // 描述
  })
}
