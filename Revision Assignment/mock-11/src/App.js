import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import User_page from './components/Tela_page/User_page';
import Login from './components/Admin_Page/Login';
import List_Page from './components/Admin_Page/List_Page';
import Report from './components/Admin_Page/Report';
import ReqAuth from './Auth/ReqAuth';
import Admin from './components/Admin_Page/Admin';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Homepage />}  />
     <Route path="/user" element={<User_page />}  />
     <Route path="/admin" element={<Admin />}  />
     <Route path="/login" element={<Login />}  />
     <Route path="/list" element={ <ReqAuth><List_Page /></ReqAuth> }/>
     <Route path="/report" element={<ReqAuth><Report /></ReqAuth>}  />
     </Routes>
    </div>
  );
}

export default App;
