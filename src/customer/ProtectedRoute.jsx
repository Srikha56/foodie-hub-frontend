import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children}) => {
  
    const isLoggedIn =localStorage.getItem("customer");

          return isLoggedIn ? children :
          <Navigate to='/customerlogin' replace />


  
}

export default ProtectedRoute
