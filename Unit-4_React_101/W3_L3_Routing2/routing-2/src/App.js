import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import RequireAuth from './hoc/RequireAuth';
import Feeds from './Pages/Feeds';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Posts from './Pages/Posts';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path="" element={<Home />} />
       <Route path="login" element={<Login />} />
       <Route path="feeds" 
       element={  
       <RequireAuth>
      <Feeds />
     </RequireAuth>} 
    />
    <Route path="posts" element={
      <RequireAuth>
        <Posts />
      </RequireAuth>
    } />
     </Routes>
    </div>
  );
}

export default App;
