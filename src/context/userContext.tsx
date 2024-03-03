import { User } from '@/lib/entities/user'
import React, { createContext, useEffect, useState } from 'react'

interface UserAuthContextProps {
  user: User | null
  token: string | null
  login: (user: User, token: string) => void
  logout: () => void
  loading: boolean
}

export const UserAuthContext = createContext<UserAuthContextProps>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  loading: true,
})

export const UserAuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const storedToken = localStorage.getItem('token')

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser))
      setToken(storedToken)
    }
    setLoading(false)
  }, [])

  const login = (user: User, token: string) => {
    console.log(user, token)
    setUser(user)
    setToken(token)
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <UserAuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </UserAuthContext.Provider>
  )
}
