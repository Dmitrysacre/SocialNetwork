import React from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'

function App() {


  return (
    <div className="container">
      <Header></Header>

      <div className="row pt-3">
      <Navbar></Navbar>
      <Profile></Profile>
      </div>

    </div>
  )
}

export default App
