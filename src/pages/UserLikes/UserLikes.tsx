import React, { useEffect } from 'react'
import styles from './style.module.css'
import { Container } from '@mui/material'
import VideoList from '../../components/videoList/VideoList'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getLikeList } from '../../store/actions/LikesActions'
import { getArrayByIdVideos } from '../../store/actions/VideoActions'

// const mock = new Array(16).fill({ img: 'https://marisakantor.com.ar/wp-content/uploads/2019/10/01-Responsive-Website.jpg', id: 1, title: '123321' })


const UserLikes = () => {
  const { likeList } = useAppSelector(state => state.likes)
  const { id, isAuth } = useAppSelector(state => state.user)
  const { likesVideoArray } = useAppSelector(state => state.video)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isAuth) {
      dispatch(getLikeList(id))
    }
  }, [dispatch, id, isAuth])

  useEffect(() => {
    if (likeList) {
      dispatch(getArrayByIdVideos(likeList))
    }
  }, [dispatch, likeList])

  return (
    <Container>
      <VideoList array={likesVideoArray} title='Понравившиеся записи' />
    </Container>
  )
}

export default UserLikes