const User = require('../models/Users')
const Moves = require('../models/Moves')
const bcrypt = require('bcrypt')
const { githubProfile } = require('../services')

module.exports = {
  login: async (req, res) => {
    const { userName, password } = req.body
    const user = await User.findOne({ where: { userName } })

    await bcrypt.compare(password, user.password, (err, result) => {
      if (!result) return res.status(401).json({ mensagem: 'Falha na autenticação' })

      return res.status(202).json(user)
    })
  },

  create: async (req, res) => {
    const { userName, password } = req.body

    const userExisting = await User.findOne({ where: { userName } })

    if (userExisting) return res.status(400).json({ message: 'Usuario não disponivel' })

    const profile = await githubProfile(userName)
    if (profile.name === 'Error') return res.status(400).json({ message: 'Usuario não disponivel' })
    const { avatar_url, name } = profile

    bcrypt.hash(password, 10, async (err, hash) => {
      const user = await User.create({ userName, password: hash, avatar_url, name })
      const move = await Moves.create({ userId: user.id, level: 0, currentExperience: 0, challengesCompleted: 0 })
      return res.status(201).json({ user, move })
    })
  },

  findAll: async (req, res) => {
    const users = await User.findAll()
    return res.status(200).json(users)
  },

  ranking: async (req, res) => {
    const rankin = await Moves.findAll({
      attributes: ['id', 'userId', 'level', 'currentExperience', 'challengesCompleted'],
      include: [
        {
          model: User,
          as: 'users',
          required: true,
          attributes: ['id', 'userName', 'name', 'avatar_url'],
        },
      ],
      order: [['level', 'DESC']]
    })

    return res.status(200).json(rankin)
  }
}