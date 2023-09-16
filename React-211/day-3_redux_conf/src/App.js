import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import { loginFailure, loginRequest, loginSuccess } from './Redux/AuthReducer/action';
import {axios} from "axios";

function App() {
const [useremail,setUserEmail]=useState("");
const [password,setPassword] =useState("");
const dispatch =useDispatch();
const isAuth =useSelector((store)=>store.AuthReducer.isAuth)

const handleLogin=()=>{
  if(useremail && password){
    const payload={
      email:useremail,
      password:password,
    };
  
      dispatch(loginRequest());
      axios
      .post("https://reqres.in/api/login",payload)
      .then((r)=>{
        console.log(r.data);
        return dispatch(loginSuccess(r.data));
      })
      .catch((e)=> dispatch(loginFailure(e)));
    } 
  
}


  return(
    <div className="App">
    <Counter />
    <br />
    <div>
      <input placeholder='email'
      type="email"
      value={useremail}
      onChange={(e)=>{
        setUserEmail(e.target.value)
      }}
      />
      <input placeholder='password'
          type="password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
      />
      <button onClick={handleLogin}>LOGIN</button>
    </div>
   {isAuth && <Todos />} 
    </div>
  );
}

export default App;
