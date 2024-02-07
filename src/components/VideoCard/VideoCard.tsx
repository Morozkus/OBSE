import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { limitText } from '../../utils/limit';

interface IVideoCard {
  title: string;
  text: string;
  img: string;
  id: number;
  saveFunction: (id: number) => void;
  deleteFunction: (id: number) => void
  isLike?: boolean;
}


export default function VideoCard({ img, text, title, id, saveFunction, deleteFunction, isLike = false }: IVideoCard) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {limitText(text, 0, 30)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="small" color="primary">
          <Link to={'/video/' + id}>Подробнее</Link>
        </Button>

        {isLike ?
          <Button size="small" color="primary" onClick={() => saveFunction(id)}>
            Сохранить
          </Button>
          :
          <Button size="small" color="primary" onClick={() => deleteFunction(id)}>
            Удалить
          </Button>}

      </CardActions>
    </Card>
  );
}