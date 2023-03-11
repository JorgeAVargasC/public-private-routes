import { Navigate, Outlet } from 'react-router-dom'

const isLogged = true

export const PublicRoutes = () => {
  return isLogged ? <Navigate to='/dashboard' /> : <Outlet />
}
