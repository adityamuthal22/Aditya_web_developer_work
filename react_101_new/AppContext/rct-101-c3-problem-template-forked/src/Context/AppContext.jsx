import React, { createContext, useReducer, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// dont change the name
export const AppContext = createContext();

// dont change the name
export const appReducer = () => {
  // write code
};

function AppContextProvider({ children }) {
  
 
  const [state, setState] = useState({
    isAuth: true,
    token: null
  });

  function handleLogin(token) {
    setState({
      ...state,
      isAuth: true,
      token: token
    });
  }
  function handleLogout() {
    setState({
      ...state,
      isAuth: false,
      token: null
    });

  }
  // you need to use context
  // fix code here
  return (
    <>
      <AppContext.Provider value={{ state, handleLogin, handleLogout }}>
        {children}
      </AppContext.Provider>
    </>
  );
}

export default AppContextProvider;
