import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

export default function PrivateMaster() {
    const auth = localStorage.getItem('master');

    return (
        auth ? <Outlet /> : <Navigate to={'/masterLogin'} />
    )
}
