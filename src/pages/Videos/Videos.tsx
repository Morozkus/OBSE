import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import VideoList from '../../components/videoList/VideoList'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getAllVideos } from '../../store/actions/VideoActions'
import { getLikeList } from '../../store/actions/LikesActions'

// const mock = new Array(16).fill({ img: 'https://marisakantor.com.ar/wp-content/uploads/2019/10/01-Responsive-Website.jpg', id: 1, title: '123321' })


const Videos = () => {
  const { isLoading, videos } = useAppSelector(state => state.video)
  const dispatch = useAppDispatch()
  const { isAuth, id } = useAppSelector(state => state.user)

  useEffect(() => {
    if (isAuth) {
      dispatch(getLikeList(id))
    }
  }, [dispatch, id, isAuth])

  useEffect(() => {
    dispatch(getAllVideos())
  }, [dispatch])

  return (
    <Container>
      <VideoList array={videos} title='Все статьи' />
    </Container>
  )
}

export default Videos