import React, { useState, useEffect, Component } from "react";
import  Nav  from "../Components/Signup/navbar";
import { Input, FormBtn } from "../components/Form";
import axios from "axios";
import { Route, Link } from 'react-router-dom';



    
class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
    return (
        <div>
         <Nav />
         <h4>Login Form</h4>
          <form>
            <Input 
            onChange={""}
            name="username"
            placeholder="username"
            />
            <Input 
            onChange={""}
            name="password"
            placeholder="password"
            />
            <FormBtn 
            onClick={""}>
            Login
            </FormBtn>
         </form>
        </div>
      )
    
    }
}

export default Login;