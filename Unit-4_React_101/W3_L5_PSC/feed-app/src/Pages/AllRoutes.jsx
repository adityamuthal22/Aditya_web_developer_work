import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Users from './Users'

const AllRoutes = () => {
  return (
    <div>
       <Navbar /> 
       <div>
        <Routes>
            <Route path='/' element={<div>Home</div>} />
            <Route path='/login' element={<div>Login</div>} />
            <Route path='/users' element={<Users />} />

        </Routes>
        </div>
    </div>
 
  )
}

export default AllRoutes