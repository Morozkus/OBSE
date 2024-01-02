import React from 'react'

import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'

const NavBar = () => {
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%' }}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><h1 className={styles.logo}>OBSE</h1></li>
          <li className={styles.navItem}><Link to={'/'} className={styles.navLink}>Главная</Link></li>
          <li className={styles.navItem}><Link to={'/about'} className={styles.navLink}>О проекте</Link></li>
          <li className={styles.navItem}><Link to={'/auth'} className={styles.navLink}>Авторизация</Link></li>
        </ul>
      </nav>
    </Container>
  )
}

export default NavBar