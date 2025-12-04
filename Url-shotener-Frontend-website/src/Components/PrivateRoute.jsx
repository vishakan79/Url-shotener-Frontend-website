import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ isLoggedIn }) => {
    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }
  return <Outlet/>
}

export default PrivateRoute