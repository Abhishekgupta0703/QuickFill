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
import PetrolPumpLogin from './components/PumpLogin'
import PrivatePump from './components/PrivatePump'
import PumpDashboard from './pages/PumpDashboard'
import MasterLogin from './components/MasterLogin'
import PrivateMaster from './components/PrivateMaster'
import NoPage from './components/NoPage'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Toaster position='bottom-center' toastOptions={{duration: 2000}} />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/PetrolPumpLogin" element={<PetrolPumpLogin />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/masterLogin' element={<MasterLogin />} />
          <Route element={<Private />} >
            <Route exact path='/PetrolPump' element={<PetrolPump />} />
            <Route exact path="/PetrolPumps/:id" element={<PetrolPump />} />
            <Route exact path="/Profile" element={<ProfilePage />} />
            <Route exact path='/logout' element={<h1>Logout</h1>} />
          </Route>
          <Route element={<PrivateMaster />}>
            <Route exact path="/AddPetrolPump" element={<AddPetrolPump />} />
          </Route>
          <Route element={<PrivatePump />}>
            <Route exact path='PumpDashboard' element={<PumpDashboard />} />
            <Route exact path='logout' element={<h1>Logout</h1>} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}
