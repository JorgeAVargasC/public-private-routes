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

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path='/' element={<Landing />} />

        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route path='/login' element={<Login />} />
        </Route>

      </Route>

    </Routes>
  )
}
