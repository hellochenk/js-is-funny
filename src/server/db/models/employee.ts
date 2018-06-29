
module.exports = (sequelize:any, DataTypes:any) => {
  return sequelize.define('employee', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const title = this.getDataValue('title');
        // 'this' 允许你访问实例的属性
        return this.getDataValue('name') + ' (' + title + ')';
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val:string) {
        this.setDataValue('title', val.toUpperCase());
      }
    }
  });
}

// let Employee = sequelize.define('employee', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     get() {
//       const title = this.getDataValue('title');
//       // 'this' 允许你访问实例的属性
//       return this.getDataValue('name') + ' (' + title + ')';
//     },
//   },
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     set(val) {
//       this.setDataValue('title', val.toUpperCase());
//     }
//   }
// });