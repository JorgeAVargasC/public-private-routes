import { authState } from '../atoms/auth.atom'
import { useRecoilState } from 'recoil'
import cookie from 'js-cookie'

export const useAuth = () => {
  const [, setAuth] = useRecoilState(authState)

  const handleLogin = () => {
    setAuth(true)
    cookie.set('auth', true)
  }

  const handleLogout = () => {
    setAuth(false)
    cookie.remove('auth')
  }

  const handleRecoverSession = () => {
    if (cookie.get('auth')) {
      setAuth(true)
    }
  }

  return {
    handleLogin,
    handleLogout,
    handleRecoverSession
  }
}
