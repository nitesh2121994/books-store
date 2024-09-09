import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, Navigate  } from 'react-router-dom'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'
import UserBookCollection from './pages/UserBookCollection'
import Header from './components/Header'
import UserRegistration from './pages/UserRegistration'

function App() {

  return (
    <>
      <Header />

      <div className="container">
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>}  />
          <Route path='/home' element={<Home />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/your-collection" element={<UserBookCollection />} />
          <Route path="/user-registration" element={<UserRegistration />} />
        </Routes>
      </div>
    </>
  )
}

export default App
