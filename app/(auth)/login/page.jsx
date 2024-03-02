'use client';

import React from 'react';
import AuthForm from '../AuthFomr';


const Login = () => {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault()

    console.log(email, password)
  }

  return (
    <main>
    <h2 className="text-center">Login</h2>
    <AuthForm handleSubmit={handleSubmit} />
  </main>
  )
}

export default Login;