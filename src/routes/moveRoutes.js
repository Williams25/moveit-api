const router = require('express').Router()
const move = require('../controllers/MovesController')

router.put('/', move.update)

module.exports = router