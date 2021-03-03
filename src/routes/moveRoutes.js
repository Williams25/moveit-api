const router = require('express').Router()
const move = require('../controllers/MovesController')

router.put('/', move.update)
router.get('/:userId', move.findOne)

module.exports = router