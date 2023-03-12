import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PrivateRoutes = ({ auth }) => {
  const { pathname } = useLocation()
  return auth ? <Outlet /> : <Navigate to='/login' state={{ from: pathname }} />
}
