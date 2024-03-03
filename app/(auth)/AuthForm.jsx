"use client"
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const AuthForm = ({ handleSubmit, loggingIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={(e) => handleSubmit(e, email, password)}>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required 
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required 
        />
      </label>
      <button type="submit" className='btn-primary' disabled={loggingIn}>
        {loggingIn ? <ClipLoader size={20} color="white" /> : "Log in"}
      </button>
    </form>
  )
}

export default AuthForm;