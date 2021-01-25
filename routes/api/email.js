const router = require('express').Router()
const emailHandlers = require('../../controllers/emailController.js')
router.route('/start/:email').post(emailHandlers.start)
router.route('/stop').post(emailHandlers.stop)
module.exports = router
