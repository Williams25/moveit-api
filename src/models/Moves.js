const { Model, DataTypes } = require('sequelize')

class Moves extends Model {
  static init(sequelize) {
    super.init({
      level: DataTypes.INTEGER,
      currentExperience: DataTypes.INTEGER,
      challengesCompleted: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'Moves',
    })
  }

  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'users'
    })
  }
}

module.exports = Moves