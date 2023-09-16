import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {Link,useNavigate} from 'react-router-dom'

const Navbar = () => {
    const {isAuth,logout}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleLoginClick=()=>{
      
        if(isAuth){
            logout();
            // navigate("/")
            //he want to logout
        }else{
//he want to login
            navigate("/login")
        }
    };
  return (
    <div style=
    {{
        padding:"10px",
    display:'flex',
    gap:"20px",
    border:"1px solid blue",
  paddingLeft:"500px",
        width:"95%"
    }}>
        <Link to="">Home</Link>
        <Link to="/feeds">Feeds</Link>
        <Link to="/Posts">Posts</Link>
       <button onClick={handleLoginClick}>
           {isAuth ? "Logout":"Login"}
       </button>
    </div>
  )
}

export default Navbar