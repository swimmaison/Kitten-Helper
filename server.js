const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3001

const cron = require('node-cron')
const nodemailer = require('nodemailer')

// setting up the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kittenhelper1@gmail.com',
    pass: 'Kittenhelper1!'
  }
})

// configuring the mail option
const mailOptions = {
  from: 'kittenhelper1@gmail.com',
  to: 'swim.maison@gmail.com',
  subject: 'Daily 2 Hour Notification',
  text: 'Hey Specified User, this is your daily 2 hour notification reminder, that is delivered to users every two hours'
}

// send mail affixed with cron job, this example is currently configured to deliver emails every minute instead of two hours to display the fact that nodemailer is working
cron.schedule('* * * * *', () => {
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log('Error Occurs')
    } else {
      console.log('Email Sent!')
    }
  })
})

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
