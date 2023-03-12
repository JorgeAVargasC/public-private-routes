import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PublicRoutes = ({ auth }) => {
  const { state } = useLocation()
  return auth ? <Navigate to={state?.from ?? '/dashboard'} /> : <Outlet />
}
