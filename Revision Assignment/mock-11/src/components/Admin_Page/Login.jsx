import { Box, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../Redux/AuthReducer/action';
import { USER_LOGIN_SUCCESS } from '../../Redux/AuthReducer/actionTypes';


const Login = () => {
  const dispatch= useDispatch();
const [email,setEmail] =useState("");
const [password,setPassword] =useState("");
const location =useLocation();
const comingFrom =location.state?.from?.pathname || "/list";
const navigate =useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault();
      if(email && password){
        dispatch(login({email,password}))
        .then((r)=>{
          if(r.type === USER_LOGIN_SUCCESS){
            navigate(comingFrom,{replace:true})
          }
        })
      }
  }
  return (
    <Box  width={"300px"} margin="auto"
    boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
    marginTop={"50px"}
    >
      <Text fontSize={"50px"}>LoginPage</Text>
      <form onSubmit={handleSubmit}>
      <Box>
        <label >User Name:</label><br />
        <input type={'email'} 
        placeholder="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />
      </Box><br /><br />
      <Box>
        <label >User Password:</label><br />
        <input type={'password'}
         placeholder="password" 
         value={password}
        onChange={(e)=>setPassword(e.target.value)} />
      </Box><br /><br />
      <Box>
        <Input backgroundColor={"orange"} color="white" type={'submit'} />
      </Box>
      </form>
    </Box>
  )
}

export default Login