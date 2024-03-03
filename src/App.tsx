import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/sign-in/signIn'
import SignUp from './pages/sign-up/signUp'
import PrivateRoute from './utils/privateRoute'

const App = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<>Auth</>} />
      </Route>
    </Routes>
  )
}

export default App
