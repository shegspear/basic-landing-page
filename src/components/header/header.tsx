import React from 'react'
import Navbar from '../navbar/navbar'
import Hero from '../hero/hero'
import styles from './header.module.css'

const Header = () => {
  return (
    <div 
        className={styles.heroCont}
    >
        <Navbar/>
        <Hero />
    </div>
  )
}

export default Header