/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
})

class Signup extends Component {
  constructor () {
    super()
    this.state = {
      password: '',
      confirmPassword: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()

    // request to server to add a new password
    axios.post('/api/user/signup', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log(response)
        if (!response.data.errmsg) {
          alert('successful signup')
          localStorage.setItem('token', response.data.token)
          this.props.history.push('/')
        } else {
          alert('email already taken')
        }
      }).catch(error => {
        alert('signup error: ' + error)
      })
  }

  render () {
    const { classes } = this.props
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                   variant="outlined"
                   required
                   fullWidth
                   id="email"
                   label="Email Address"
                   name="email"
                   autoComplete="email"
                   onChange={this.handleChange}
                 />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                   variant="outlined"
                   required
                   fullWidth
                   name="password"
                   label="Password"
                   type="password"
                   id="password"
                   autoComplete="current-password"
                   onChange={this.handleChange}
                 />
                        </Grid>
                    </Grid>
                    <Button
               type="submit"
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit}
               onClick={this.handleSubmit}
             >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Log in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    )
  }
}

export default withRouter(withStyles(styles)(Signup))
