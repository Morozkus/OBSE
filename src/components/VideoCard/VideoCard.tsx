import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

interface IVideoCard {
  title: string;
  img: string;
  id: number;
  saveFunction: (id: number) => void;
  deleteFunction: (id: number) => void
}


export default function VideoCard({ img, title, id, saveFunction, deleteFunction }: IVideoCard) {
  const { isAuth } = useAppSelector(state => state.user)
  const { likeList } = useAppSelector(state => state.likes)

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
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="small" color="primary">
          <Link to={'/video/' + id}>Подробнее</Link>
        </Button>

        {isAuth && likeList && (!likeList.includes(id) ?
          <Button size="small" color="primary" onClick={() => saveFunction(id)}>
            Сохранить
          </Button>
          :
          <Button size="small" color="primary" onClick={() => deleteFunction(id)}>
            Удалить
          </Button>)}

      </CardActions>
    </Card>
  );
}