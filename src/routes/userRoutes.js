const router = require('express').Router()
const user = require('../controllers/UsersController')

router.post('/login', user.login)
router.post('/', user.create)
router.get('/', user.findAll)
router.get('/ranking', user.ranking)

module.exports = router