import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
        padding:"30px",
        display:"flex",
        gap:"20px",
        fontSize:"30px"
    }}>
        <Link to="/">Counter App</Link>
        <Link to="/todoapp">Todo App</Link>
    </div>
  )
}

export default Navbar