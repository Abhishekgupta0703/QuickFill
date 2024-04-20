import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

function PrivatePump() {
    const auth = localStorage.getItem('pumpToken');
  return (
    auth ? <Outlet /> : <Navigate to={'/PetrolPumpLogin'} />
  )
}

export default PrivatePump


