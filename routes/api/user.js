const router = require('express').Router()
const userHandlers = require('../../controllers/userController.js')
router.route('/signup').post(userHandlers.signup)
router.route('/login').post(userHandlers.login)
module.exports = router
