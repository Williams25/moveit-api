const { Model, DataTypes } = require('sequelize')

class Users extends Model {
  static init(sequelize) {
    super.init({
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar_url: DataTypes.STRING,
      name: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Users',
    })
  }

  static associate(models) {
    this.hasMany(models.Moves, {
      foreignKey: 'userId',
      as: 'moves'
    })
  }
}

module.exports = Users