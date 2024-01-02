import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Videos from '../pages/Videos'
import About from '../pages/About'
import { Details } from '@mui/icons-material'
import Auth from '../pages/Auth'
import Admin from '../pages/Admin'

const AppRouter = () => {
  const [isAuth] = useState(false)

  return (
      <Routes>
        <Route path='/' element={<Videos />} />
        <Route path='/about' element={<About />} />
        <Route path='/auth' element={<Auth />} />

        <Route path='/video/:id' element={<Details />} />

        {isAuth &&
          <>
            <Route path='/admin' element={<Admin />} />
          </>}

        <Route path='*' element={<Videos />} />
      </Routes>
  )
}

export default AppRouter