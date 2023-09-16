import './App.css';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import styles from './components/Navbar.module.css'
import {Sidebar} from './components/Sidebar';

function App() {
  const { isLight } = useContext(ThemeContext)
  return (
    <div className={ `App ${isLight ? styles.light : styles.dark}`}>
<Navbar/>
<Sidebar/>
    </div>
  );
}

export default App;
