"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

// components
import AuthForm from "../AuthForm"

export default function Login() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loggingIn, setLoggingIn] = useState(false);

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setError('')
    setLoggingIn(true);

    const supabase = createClientComponentClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      setError(error.message)
      setLoggingIn(false);
    }
    if (!error) {
      await new Promise(resolve => setTimeout(resolve, 3000)); 
      router.push('/')
    } 

  }
[]
  return (
    <main>
      <h2 className="text-center">Login</h2>

      <AuthForm handleSubmit={handleSubmit} loggingIn={loggingIn} />

      {error && (
        <div className="error">{error}</div>
      )}
    </main>
  )
}