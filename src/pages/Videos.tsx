import { Container } from '@mui/material'
import React from 'react'
import VideoList from '../components/videoList/VideoList'

const Videos = () => {
  return (
    <Container>
      <VideoList title='Все статьи'/>
    </Container>
  )
}

export default Videos