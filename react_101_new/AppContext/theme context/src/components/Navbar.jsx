import React from 'react'
import { useContext } from 'react'
import styles from './Navbar.module.css'
import { ThemeContext } from '../context/ThemeContext';
import { Button } from '@chakra-ui/react';


const Navbar = () => {
    const {isLight, toggleTheme} =useContext(ThemeContext)
  return (
    <div className={styles.Navbar}>
        <h3>Navbar</h3>
        <p>Home</p>
        <p>About us</p>
        <p>Contact us</p>

        <Button className={styles.btn} onClick={toggleTheme}>
            {` ${isLight ? "Dark" : "Light"} Mode`}
        </Button>
    </div>
  )
}

export default Navbar