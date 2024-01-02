import React from 'react'
import AuthInput from '../components/Auth/AuthInput'
import { Box } from '@mui/material'

const Auth = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <AuthInput />
    </Box>
  )
}

export default Auth