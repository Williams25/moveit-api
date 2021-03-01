const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const User = require('../models/Users')
const Moves = require('../models/Moves')

const connection = new Sequelize(dbConfig)

User.init(connection)
Moves.init(connection)

User.associate(connection.models)
Moves.associate(connection.models)

module.exports = connection