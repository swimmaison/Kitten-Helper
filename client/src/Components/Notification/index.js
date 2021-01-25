import React from 'react'
import cron from 'node-cron'
import nodemailer from 'nodemailer'
import ModalButton from '../ModalButton'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

export default function Notification (props) {
  const [email, setEmail] = React.useState()
  const handleChange = event => {
    const { value } = event.target
    setEmail(value)
  }

  //   setting up the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kittenhelper1@gmail.com',
      pass: process.env.EMAIL_PASS
    }
  })

  // configuring the mail option

  // send mail affixed with cron job, this example is currently configured to deliver emails every minute instead of two hours to display the fact that nodemailer is working
  const handleSubmit = () => {
    const mailOptions = {
      from: 'kittenhelper1@gmail.com',
      to: email,
      subject: 'Daily 2 Hour Notification',
      text: 'Hey Specified User, this is your daily 2 hour notification reminder, that is delivered to users every two hours'
    }
    cron.schedule('* * * * *', () => {
      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log('Error Occurs')
        } else {
          console.log('Email Sent!')
        }
      })
    })
  }

  return <ModalButton label='Notification Options' onClick={handleSubmit}>
      <Typography component="h1" variant="h5">
          Email Notifications
      </Typography>
      <TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id="email"
               label="Email Address"
               name="email"
               autoComplete="email"
               autoFocus
               onChange= {handleChange}
             />
  </ModalButton>
}
