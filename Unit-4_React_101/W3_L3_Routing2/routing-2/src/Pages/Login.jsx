import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import  {useNavigate} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const [loginCreds,setLoginCreds]=useState({});
    const {login}=useContext(AuthContext);

    const handleChange =(e)=>{
       
        const {name ,value}=e.target;
        setLoginCreds({
            ...loginCreds,
            [name]:value,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        login();
        navigate("/feeds")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}
        style={{
            display:"flex",
            flexDirection:"column",
            margin:"auto",
            width:"200px",
            gap:"10px",
        }}>
           
        <input name='email' type="text" placeholder='email' 
        onChange={handleChange}/>

        <input type="password" placeholder='Enter Password...' 
        onChange={handleChange}/>

        <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login