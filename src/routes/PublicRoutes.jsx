import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoutes = ({ auth }) => {
  return auth ? <Navigate to='/dashboard' /> : <Outlet />
}
