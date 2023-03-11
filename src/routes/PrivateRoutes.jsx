import { Navigate, Outlet } from 'react-router-dom'

const isLogged = true

export const PrivateRoutes = () => {
  return isLogged ? <Outlet /> : <Navigate to='/login' />
}
