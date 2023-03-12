import React from 'react'

import { useAuth } from '../hooks/useAuth'

export const Login = () => {
  const { handleLogin } = useAuth()

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-center'>Login Page</h2>
      <button onClick={handleLogin} className='bg-sky-500 px-4 py-2 rounded-md'>
        Log In
      </button>
    </div>
  )
}
