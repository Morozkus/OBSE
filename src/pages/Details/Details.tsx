import { Container, Grid, Typography, Link as MLink } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

import styles from './details.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getIdVideo } from '../../store/actions/VideoActions'


// const mock = new Array(16).fill({ title: 'Пробное название для статьи', paragraphs: 'Lorem ipsum dolor sit amet\n, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit\n, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.'.repeat(4) }) as IDetails[]

interface IElementLink {
  name: string;
  link: string;
}

const Details = () => {
  const { id } = useParams()

  const { isLoading, videoById } = useAppSelector(state => state.video)
  const dispatch = useAppDispatch()

  const navigationLink = useMemo<IElementLink[]>(() => {
    if (videoById) {
      return videoById.details.map((el, idx) => ({ name: el.title, link: 'navigation-link-' + idx }))
    }
    return []
  }, [videoById])

  useEffect(() => {
    if (id) {
      dispatch(getIdVideo(Number(id)))
    }
  }, [dispatch, id])

  return (
    <Container>
      <Grid className={styles.leftNavigation} display='flex' flexDirection='column' alignItems='center'>
        {navigationLink.map((el, idx) =>
          <MLink sx={{ marginTop: 5, maxWidth: '150px' }} href={'#' + el.link} key={'navigation-link-' + idx} variant='body2'>{el.name}</MLink>
        )}
      </Grid>
      <Grid container sx={{ width: '100%' }} flexDirection='column' alignItems='center'>

        <Typography sx={{ marginTop: 2 }} variant='h4' component='h4'>{videoById?.title}</Typography>

        <Link to={videoById?.videoLink ?? ''}><img src={videoById?.img ?? ''} alt="video img" style={{ width: '100%', marginTop: 16 }} /></Link>

        {videoById && videoById.details.map((detail, index) =>
          <Grid container sx={{ width: '100%' }} key={'details-title' + index}>
            <Typography sx={{ marginTop: 2 }} variant='h5' component='h5' className='detail__title' id={navigationLink[index].link}>{detail.title}</Typography>

            <Grid container sx={{ width: '100%', marginTop: 2 }} gap={2}>
              {detail.paragraphs && detail.paragraphs.split('\n').map((paragraph, i) => <Typography variant='body1' key={'details-paragrp' + index + i} whiteSpace='pre-wrap'>{paragraph}</Typography>)}
            </Grid>

          </Grid>
        )}

      </Grid>

    </Container>
  )
}

export default Details