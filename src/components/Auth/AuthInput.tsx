import { Box, TextField, Button } from '@mui/material'
import React from 'react'

const AuthInput = () => {
  const boxStyle = {
    width: 450, height: 250, padding: '20px', backgroundColor: '#fff',
    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px',
    borderRadius: '10px'
  }

  return (
    <Box sx={boxStyle}>
      <TextField id="login" label="Логин" />
      <TextField id="password" label="Пароль" />
      <Button variant="contained" color="primary">Войти</Button>
    </Box>
  )
}

export default AuthInput