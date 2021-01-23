/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import Nav from '../Components/Signup/navbar'
import { Input, FormBtn } from '../Components/Forms'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      redirectTo: null
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
    console.log('handleSubmit')

    axios
      .post('/api/user/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token)
          this.props.history.push('/')
        }
      }).catch(error => {
        console.log('login error: ')
        console.log(error)
      })
  }

  render () {
    return (
        <div>
            <Nav />
            <h4>Login Form</h4>
            <form>
                <Input
            onChange={this.handleChange}
            name="email"
            placeholder="email"
            />
                <Input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="password"
            />
                <FormBtn
            onClick={this.handleSubmit}>
                    Login
                </FormBtn>
            </form>
        </div>
    )
  }
}

export default withRouter(Login)
