import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PublicRoutes = ({ auth }) => {
  const location = useLocation()
  useEffect(() => {
    console.log(location)
  }, [])

  return auth ? <Navigate to={location?.state?.from ?? '/dashboard'} /> : <Outlet />
}
