/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import Nav from '../Components/Signup/navbar'
import { Input, FormBtn } from '../Components/Forms'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Signup extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
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
    console.log('sign-up handleSubmit, username: ')
    console.log(this.state.username)
    event.preventDefault()

    // request to server to add a new username/password
    axios.post('/api/user/signup', {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log(response)
        if (!response.data.errmsg) {
          console.log('successful signup')
          localStorage.setItem('token', response.data.token)
          this.props.history.push('/')
        } else {
          console.log('username already taken')
        }
      }).catch(error => {
        console.log('signup error: ')
        console.log(error)
      })
  }

  render () {
    return (
        <div>
            <Nav />
            <h4>Sign Up Form</h4>
            <form>
                <Input
            onChange={this.handleChange}
            name="username"
            placeholder="username"
            />
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
                    Sign Up
                </FormBtn>
            </form>
        </div>
    )
  }
}

export default withRouter(Signup)

// function Signup() {

//     const [username, setUsername] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();

//     const handleSubmit = e => {
//         e.preventDefault();
//     }

//     return (
//         <div>
//         <Nav />
//         <h4>Sign Up Form</h4>
//         <form>
//             <Input
//             onChange={""}
//             name="username"
//             placeholder="username"
//             />
//             <Input
//             onChange={""}
//             name="email"
//             placeholder="email"
//             />
//             <Input
//             onChange={""}
//             name="password"
//             placeholder="password"
//             />
//             <FormBtn
//             onClick={""}>
//             Sign Up
//             </FormBtn>
//         </form>
//         </div>
//     )
// }

// export default Signup;
