import { Container, Grid, Typography, Link as MLink } from '@mui/material'
import React, { useState } from 'react'
import { IDetails } from '../../interfaces/Details'
import { Link } from 'react-router-dom'

import styles from './details.module.css'


const mock = new Array(16).fill({ title: 'Пробное название для статьи', paragraphs: 'Lorem ipsum dolor sit amet\n, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit\n, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.'.repeat(4) }) as IDetails[]

interface IElementLink {
  name: string;
  link: string;
}

const Details = () => {
  const [navigationLink] = useState<IElementLink[]>(mock.map((el, idx) => ({ name: el.title, link: 'navigation-link-' + idx })))

  return (
    <Container>
      <Grid className={styles.leftNavigation} display='flex' flexDirection='column' alignItems='center'>
        {navigationLink.map((el, idx) =>
          <MLink sx={{ marginTop: 5, maxWidth: '150px' }} href={'#' + el.link} key={'navigation-link-' + idx} variant='body2'>{el.name}</MLink>
        )}
      </Grid>
      <Grid container sx={{ width: '100%' }} flexDirection='column' alignItems='center'>

        <Typography sx={{ marginTop: 2 }} variant='h4' component='h4'>Пример текста</Typography>

        <Link to='https://vk.com/im?sel=-354372&t2fs=f1f725676ce47fdd11_11'><img src='https://marisakantor.com.ar/wp-content/uploads/2019/10/01-Responsive-Website.jpg' alt="video img" style={{ width: '100%', marginTop: 16 }} /></Link>

        {mock.map((detail, index) =>
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