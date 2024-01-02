import { Grid } from '@mui/material'
import React from 'react'
import { hasImgAndLinkField } from '../../utils/getUnknowField';
import { Link } from 'react-router-dom';

interface IVideoList {
  title: string;
  array?: unknown[];
}

const mock = new Array(16).fill({ img: 'https://marisakantor.com.ar/wp-content/uploads/2019/10/01-Responsive-Website.jpg', id: 1 })

const VideoList = ({ title, array = mock }: IVideoList) => {
  return (
    <Grid container direction='row' justifyContent='center' marginTop={3}>
      <h2>{title}</h2>
      <Grid container sx={{ marginTop: 2 }} spacing={1} gap={1} justifyContent='center'>
        {array.map((el, i) =>
          hasImgAndLinkField(el) &&
          <Grid item xs={3}>
            <Link to={'/video/' + el.id}><img src={el.img} alt={'статья ' + i} style={{ maxWidth: '100%' }} /></Link>
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}

export default VideoList