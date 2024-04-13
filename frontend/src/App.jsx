import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup'
import Private from './components/Private'
import {Toaster} from 'react-hot-toast'
import Login from './components/Login'
import Home from './pages/Home'
import PetrolPump from './pages/PetrolPump'
import Footer from './components/Footer'
import AddPetrolPump from './pages/AddPetrolPump'
import ProfilePage from './pages/ProfilePage'
// import Profile from './pages/Profile'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Toaster position='bottom-center' toastOptions={{duration: 2000}} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Private />} >
            <Route path='/PetrolPump' element={<PetrolPump />} />
            <Route path="/PetrolPumps/:id" element={<PetrolPump />} />
            <Route path="/AddPetrolPump" element={<AddPetrolPump />} />
            <Route path="/Profile" element={<ProfilePage />} />
            {/* <Route path="/Profile" element={<Profile />} /> */}
            <Route path='/logout' element={<h1>Logout</h1>} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}
