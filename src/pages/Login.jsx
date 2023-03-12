import React, { useEffect } from 'react'

import { useAuth } from '../hooks/useAuth'

import { useLocation } from 'react-router-dom'

export const Login = () => {
  const { handleLogin } = useAuth()
  const location = useLocation()

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-center'>Login Page</h2>
      <button onClick={() => handleLogin(location?.state?.from)} className='bg-sky-500 px-4 py-2 rounded-md'>
        Log In
      </button>
    </div>
  )
}
