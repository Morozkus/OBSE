import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Videos from '../pages/Videos/Videos'
import About from '../pages/About/About'
import Details from '../pages/Details/Details'
import Auth from '../pages/Auth/Auth'
import Admin from '../pages/Admin/Admin'
import UserLikes from '../pages/UserLikes/UserLikes'

const AppRouter = () => {
  const [isAuth] = useState(true)

  return (
      <Routes>
        <Route path='/' element={<Videos />} />
        <Route path='/about' element={<About />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/video/:id' element={<Details />} />

        {isAuth &&
          <>
            <Route path='/admin' element={<Admin />} />
            <Route path='/likes' element={<UserLikes />} />
          </>}

        <Route path='*' element={<Videos />} />
      </Routes>
  )
}

export default AppRouter