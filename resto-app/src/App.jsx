import { useState } from 'react'
import './App.css'
import Header from '../components/Navbar'
import Login from '../components/Login'
import Form from '../components/Form'
import MainTable from '../components/mainTable'
import SupportTable from '../components/SupportTable'
import Register from '../components/Register'


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

      {/* <!-- LIST ENTITAS UTAMA START --> */}
      <MainTable />
      {/* <!-- LIST ENTITAS UTAMA END --> */}

      {/* <!-- FORM CREATE CUISINE START --> */}
      <Form />
      {/* <!-- FORM CREATE CUISINE END --> */}

      {/* <!-- LIST ENTITAS SUPPORT START --> */}
      <SupportTable />
      {/* <!-- LIST ENTITAS SUPPORT END --> */}

      {/* <!-- REGISTER FORM START --> */}
      <Register />
      {/* <!-- REGISTER FORM END --> */}
    </>
  )
}

export default App
