import { API_URL } from '@/config/appConfig'

export enum QueryKeys {
  User = 'User',
}

export const getAccessToken = () => {
  return localStorage.getItem('token')
}

// async function fetchData<T>(url: string): Promise<T> {
//   return (
//     await fetch(url, {
//       method: 'GET',
//       credentials: 'include',
//       headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getAccessToken()}` },
//     })
//   ).json()
// }

async function postData<T>(url: string, data: T): Promise<T> {
  return (
    await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getAccessToken()}` },
      body: JSON.stringify(data),
    })
  ).json()
}

export const LoginUser = async (data: { email: string; password: string }) =>
  postData(`${API_URL}/auth/user/login`, data)

export const RegisterUser = async (data: { name: string; email: string; password: string }) =>
  postData(`${API_URL}/auth/user/register`, data)
