import React from 'react'
import ModalButton from '../ModalButton'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import API from '../../utils/API'

export default function Notification (props) {
  const [email, setEmail] = React.useState()

  const handleChange = event => {
    const { value } = event.target
    setEmail(value)
  }
  const stopNotifications = () => {
    API.stopEmails().then(res => {
    }).catch(err => {
      console.log(err)
    })
    alert('Notifications stopped')
  }

  // configuring the mail option

  // send mail affixed with cron job, this example is currently configured to deliver emails every minute instead of two hours to display the fact that nodemailer is working
  const handleSubmit = () => {
    console.log(email)
    API.startEmails(email).then((res) => console.log(res)).catch(err => console.log(err))
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
      <Button variant="outlined" color="secondary" onClick={stopNotifications}>Stop Notifications</Button>
  </ModalButton>
}
