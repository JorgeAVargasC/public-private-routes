import React from 'react'

import { Outlet, Link } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

export const MainLayout = () => {
  const { handleLogout } = useAuth()

  return (
    <div className='bg-slate-900 text-white min-h-screen grid grid-rows-[1fr_10fr_1fr] place-items-center'>
      <div className='flex gap-4 items-center'>
        <Link to='/'>Landing</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/calendar'>Calendar</Link>
        <Link className='peer' to='/movies'>Movies</Link>
        <div className='hidden peer-hover:block'>
          hi
        </div>
        <Link className='bg-sky-500 px-4 py-2 rounded-md' to='/login'>Log In</Link>
        <button onClick={handleLogout} className='bg-sky-500 px-4 py-2 rounded-md'>
          Log Out
        </button>
      </div>
      <div className='py-4 self-start'>
        <Outlet />
      </div>
      <h1>Footer</h1>
    </div>
  )
}
