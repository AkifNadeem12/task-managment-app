import { UserAuthContext } from '@/context/userContext'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const { user, loading } = useContext(UserAuthContext)
  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/sign-in" />
  return <Outlet />
}

export default PrivateRoute
