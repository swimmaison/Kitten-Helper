
const router = require('express').Router()
const kittenRoutes = require('./kittens')
const userRoutes = require('./user')
const emailRoutes = require('./email')

// Book routes
router.use('/kittens', kittenRoutes)
router.use('/user', userRoutes)
router.use('/email', emailRoutes)

module.exports = router
