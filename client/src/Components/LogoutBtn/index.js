import React from 'react'
import { FormBtn } from '../Components/Forms'
import { useHistory } from 'react-router-dom'

export default function LogoutBtn() {
    const history = useHistory()
    function logout() {
        localStorage.clear()
        history.push('/login')
    }
    if (localStorage.getItem("token")) {
        return <FormBtn onClick={logout}>Logout</FormBtn> 
    } 
    return null
}