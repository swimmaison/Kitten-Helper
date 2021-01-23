
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3001

const { authMiddleware } = require('./config/middleware/isAuthenticated')

// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(authMiddleware)
app.use(express.static(path.join(__dirname, 'client', 'build')))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/kittenhelper',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)

// Add routes, both API and view
app.use(routes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
