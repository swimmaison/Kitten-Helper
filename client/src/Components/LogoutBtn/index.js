import React from 'react'
import { useHistory } from 'react-router-dom'
import { FormBtn } from '../Forms'
// import { FormBtn } from '../Forms'

export default function LogoutBtn () {
  const history = useHistory()
  function logout () {
    localStorage.clear()
    history.push('/login')
  }
  if (localStorage.getItem('token')) {
    return <FormBtn to={'/login'} onClick={logout}>Logout</FormBtn>
  }
  return null
}
