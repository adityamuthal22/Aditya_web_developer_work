import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [ready,setReady] =useState(false);
useEffect(()=>{
let timer =setTimeout(()=>{
  setReady(true);
},3000);
return ()=>{
  clearTimeout(timer);
}
},[])

  return (
    <div className="App">
     <h1>{ready ? "I am ready" :"I am Not Ready"}</h1>
    </div>
  );
}

export default App;
