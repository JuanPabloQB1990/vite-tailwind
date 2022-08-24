import './App.css'
import {Routes, Route} from 'react-router-dom'
import Login from './routes/Login'
import Home from './routes/Home'
import Navbar from './components/Navbar'
import RequireAuth from './components/RequireAuth'
import Register from './routes/Register'
import { useContext } from 'react'
import { UserContext } from './context/UserProvider'
import Contact from './routes/Contact'


function App() {

  const {user} = useContext(UserContext)

  if (user === false) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<RequireAuth><Home/></RequireAuth>}></Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
