import React from 'react'
import {  useNavigate } from 'react-router-dom'
import LoginForm from '../../component/Form/LoginForm'

const Login = () => {
  const navigate=useNavigate()
  return (
    <div>
       <LoginForm/>
    </div>
  )
}

export default Login