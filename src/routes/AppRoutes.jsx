import React from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  Landing,
  Dashboard,
  Login
} from '../pages'

import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

import { MainLayout } from '../layouts/MainLayout'

import { authState } from '../atoms/auth.atom'
import { useRecoilState } from 'recoil'

export const AppRoutes = () => {
  const [auth] = useRecoilState(authState)

  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path='/' element={<Landing />} />

        <Route element={<PrivateRoutes auth={auth} />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        <Route element={<PublicRoutes auth={auth} />}>
          <Route path='/login' element={<Login />} />
        </Route>

      </Route>

    </Routes>
  )
}
