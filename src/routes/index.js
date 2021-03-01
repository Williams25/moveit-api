const router = require('express').Router()

const user = require('./userRoutes')
const move = require('./moveRoutes')

router.use('/users', user)
router.use('/moves', move)

module.exports = router