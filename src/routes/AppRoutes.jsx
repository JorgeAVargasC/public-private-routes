import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  Landing,
  Dashboard,
  Login,
  Calendar
} from '../pages'

import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { MoviesRoutes } from './MoviesRoutes'

import { MainLayout } from '../layouts/MainLayout'

import { authState } from '../atoms/auth.atom'
import { useRecoilState } from 'recoil'

import { useAuth } from '../hooks/useAuth'

export const AppRoutes = () => {
  const [auth] = useRecoilState(authState)

  const { handleRecoverSession } = useAuth()

  useEffect(() => {
    handleRecoverSession()
  }, [])

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>

        <Route index element={<Landing />} />

        <Route element={<PrivateRoutes auth={auth} />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='movies/*' element={<MoviesRoutes />} />
        </Route>

        <Route element={<PublicRoutes auth={auth} />}>
          <Route path='login' element={<Login />} />
        </Route>

      </Route>

    </Routes>
  )
}
