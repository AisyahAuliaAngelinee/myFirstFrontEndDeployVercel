import { useState } from 'react'
import './App.css'
import Header from '../components/Navbar'
import Login from '../components/Login'

function App() {
  const [loginData, setLoginData] = useState("")
  return (
    <>
      {/* HEADER START */}
      <Header />
      {/* HEADER END */}

      {/* <!-- LOGIN FORM START --> */}
      <Login />
      {/* <!-- LOGIN FORM END --> */}
    </>
  )
}

export default App
