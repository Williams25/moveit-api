const Moves = require('../models/Moves')

module.exports = {
  update: async (req, res) => {
    const { userId, level, currentExperience, challengesCompleted } = req.body

    const move = await Moves.update({ level, currentExperience, challengesCompleted }, { where: { userId } })

    if (move != 1) return res.status(400).json({ message: 'Erro ao atualizar moves' })

    return res.status(200).json({userId, level, currentExperience, challengesCompleted})
  },
}