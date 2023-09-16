import React,{createContext, useState} from "react";
import  {useNavigate} from "react-router-dom"

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [isAuth,setIsAuth]= useState(false);
    const Navigate = useNavigate();


    const login=()=>{
        setIsAuth(true);
        Navigate("/feeds")
    }
    const logout=()=>{
        setIsAuth(false);
        Navigate("/")
    }
    return(
        <AuthContext.Provider value={{isAuth,login,logout}}>
          {children}
          </AuthContext.Provider> 
    )
}