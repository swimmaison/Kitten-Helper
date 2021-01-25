const cron = require('node-cron')
const nodemailer = require('nodemailer')
let task = []

module.exports = {
  start: function (req, res) {
    //   setting up the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kittenhelper1@gmail.com',
        pass: process.env.EMAIL_PASS
      }
    })
    console.log(req.params.email)
    // configuring the mail option

    // send mail affixed with cron job, this example is currently configured to deliver emails every minute instead of two hours to display the fact that nodemailer is working
    const initialMailOptions =
  {
    from: 'kittenhelper1@gmail.com',
    to: req.params.email,
    subject: 'Feeding Notifications',
    text: 'Hello! You\'ve just signed up for regular feeding notifications from Kitten Helper! We will email you every two hours to make sure you remember to feed your neonatal kitten!'
  }
    transporter.sendMail(initialMailOptions, function (err, data) {
      if (err) {
        console.log('Error Occurs')
      } else {
        console.log('Signup Email Sent!')
      }
    })
    const mailOptions = {
      from: 'kittenhelper1@gmail.com',
      to: req.params.email,
      subject: '2 Hour Feeding Notification',
      text: 'Hello, it\'s been 2 Hours since your last notification. Have you fed your kitten?'
    }
    task = cron.schedule('0 */2 * * *', () => {
      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log('Error Occurs')
        } else {
          console.log('Email Sent!')
        }
      })
    })
  },
  stop: function (req, res) {
    task.destroy()

    console.log('Notifications Stopped')
  }
}
