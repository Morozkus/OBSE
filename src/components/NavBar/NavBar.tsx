import React from 'react'

import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { Button, Container } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { userSlice } from '../../store/reducers/userSlice'
import User from '../../API/User'

const NavBar = () => {
  const { isAuth, email } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const { emptyUserInfo } = userSlice.actions

  const signOut = async (): Promise<void> => {
    await User.signout()
    dispatch(emptyUserInfo())
  }

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%' }}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><h1 className={styles.logo}>OBSE</h1></li>
          <li className={styles.navItem}><Link to={'/'} className={styles.navLink}>Главная</Link></li>
          <li className={styles.navItem}><Link to={'/about'} className={styles.navLink}>О проекте</Link></li>
          {isAuth ?
            <>
              {email === 'karnilov.rus@mail.ru' && <li className={styles.navItem}><Link to={'/admin'} className={styles.navLink}>Создать</Link></li>}
              <li className={styles.navItem}><Link to={'/likes'} className={styles.navLink}>Понравившееся</Link></li>
              <li className={styles.navItem}><Button onClick={() => signOut()}>Выйти</Button></li>
            </>
            :
            <li className={styles.navItem}><Link to={'/auth'} className={styles.navLink}>Авторизация</Link></li>}
        </ul>
      </nav>
    </Container>
  )
}

export default NavBar