import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] =useState(0);

  return (
    <div className="App">
      <h2>The count is {counter}</h2>
      <button onClick={()=>setCounter(counter+1)}>ADD</button>
      <button onClick={()=>setCounter(counter-1)}>Reduce</button>
    </div>
  );
}

export default App;
