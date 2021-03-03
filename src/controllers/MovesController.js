const Moves = require('../models/Moves')

module.exports = {
  update: async (req, res) => {
    const { userId, level, currentExperience, challengesCompleted } = req.body

    if (!userId || !level || !currentExperience || !challengesCompleted) return res.status(400).json({ message: 'Erro ao atualizar moves' })

    const move = await Moves.update({ level, currentExperience, challengesCompleted }, { where: { userId } })

    if (move != 1) return res.status(400).json({ message: 'Erro ao atualizar moves' })

    return res.status(200).json({ userId, level, currentExperience, challengesCompleted })
  },

  findOne: async (req, res) => {
    const { userId } = req.params

    const move = await Moves.findOne({ where: { userId } })

    if (!move) return res.status(400).json({ message: 'Usuario não encontrado' })

    return res.status(200).json(move)
  }
}