import React from 'react'
import styles from './style.module.css'
import { Container } from '@mui/material'
import VideoList from '../../components/videoList/VideoList'

const mock = new Array(16).fill({ img: 'https://marisakantor.com.ar/wp-content/uploads/2019/10/01-Responsive-Website.jpg', id: 1, title: '123321' })


const UserLikes = () => {
  return (
    <Container>
      <VideoList array={mock} title='Понравившиеся записи' />
    </Container>
  )
}

export default UserLikes