import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { Movies, Top, Genres } from '../pages/Movies'

export const MoviesRoutes = () => {
  return (
    <Routes path='/' element={<Movies />}>
      <Route index element={<Top />} />
      <Route path='top' element={<Top />} />
      <Route path='genres' element={<Genres />} />
    </Routes>
  )
}
