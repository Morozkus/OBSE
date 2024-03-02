import { Alert, Grid, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import { hasVariablesFields } from '../../utils/getUnknowField';
import VideoCard from '../VideoCard/VideoCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getLikeList, setLikesVideos } from '../../store/actions/LikesActions';

interface IVideoList {
  title: string;
  array: unknown[];
}

interface IdAImgATitle {
  id: number;
  img: string;
  title: string;
}

const VideoList = ({ title, array }: IVideoList) => {
  const dispatch = useAppDispatch()
  const { id: userId } = useAppSelector(state => state.user)
  const { likeList } = useAppSelector(state => state.likes)

  const [isSave, setSave] = useState(false)
  const [isDelete, setDelete] = useState(false)

  const handleClose = () => {
    isSave && setSave(false)
    isDelete && setDelete(false)
  }
  const saveFunction = async (id: number) => {
    setSave(true)
    await dispatch(setLikesVideos({ userId, videoIds: [...likeList, id] }))
    await dispatch(getLikeList(userId))
  }

  const deleteFunction = async (id: number) => {
    setDelete(true)
    await dispatch(setLikesVideos({ userId, videoIds: likeList.filter((el) => el !== id) }))
    await dispatch(getLikeList(userId))
  }

  return (
    <Grid container direction='row' justifyContent='center' marginTop={3} marginLeft='auto' marginRight='auto'>
      <h2>{title}</h2>
      <Grid container sx={{ marginTop: 2 }} spacing={1} justifyContent='space-between'>
        {array.map((el, i) =>
          hasVariablesFields<IdAImgATitle>(el, { field: 'id', type: 'number' }, { field: 'img', type: 'string' }, { field: 'title', type: 'string' }) &&
          <Grid key={'grid-container-state' + i} item xs={3}>
            <VideoCard deleteFunction={deleteFunction} saveFunction={saveFunction} id={el.id} img={el.img} title={el.title} key={'статья ' + i} />
          </Grid>
        )}
      </Grid>

      <Snackbar open={isSave} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Сохранено для прочтения!
        </Alert>
      </Snackbar>

      <Snackbar open={isDelete} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Удалено из избранного!
        </Alert>
      </Snackbar>

    </Grid>
  )
}

export default VideoList