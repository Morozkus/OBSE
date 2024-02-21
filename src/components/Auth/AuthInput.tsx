import { Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import User from '../../API/User'
import { useAppDispatch } from '../../hooks/redux'
import { userSlice } from '../../store/reducers/userSlice'
import { useNavigate } from 'react-router-dom'

const AuthInput = () => {
  const navigate = useNavigate()

  const boxStyle = {
    width: 450, height: 250, padding: '20px', backgroundColor: '#fff',
    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px',
    borderRadius: '10px'
  }

  const dispatch = useAppDispatch()
  const { setUserInfo } = userSlice.actions

  const [signType, setSignType] = useState<'up' | 'in'>('in')

  const [email, setEmail] = useState('karnilov.rus@mail.ru')
  const [password, setPassword] = useState('123123')

  const signIn = async (): Promise<void> => {
    const user = signType === 'in' ? await User.signin(email, password) : await User.signup(email, password)
    if (user) {
      dispatch(setUserInfo({ email: user?.email ?? '', id: user.id, isAuth: true }))
      navigate('/')
    }
  }

  return (
    <Box sx={boxStyle}>
      <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="email" label="email" />
      <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="password" label="password" />
      {signType === 'in' ?
        <p>Нет аккаунта? <span onClick={() => setSignType('up')} style={{ color: 'purple', cursor: 'pointer' }}>Зарегистрируйся!</span></p>
        :
        <p>Есть аккаунт? <span onClick={() => setSignType('in')} style={{ color: 'purple', cursor: 'pointer' }}>Авторизуйся!</span></p>
      }

      {signType === 'in' ?
        <Button variant="contained" color="primary" onClick={() => signIn()}>Войти</Button>
        :
        <Button variant="contained" color="primary" onClick={() => signIn()}>Зарегистрироваться</Button>}
    </Box>
  )
}

export default AuthInput