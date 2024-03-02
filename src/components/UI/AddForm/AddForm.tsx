
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import { Controller, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { IVideo } from '../../../interfaces/Video';
import { FormControl, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { createVideo } from '../../../store/actions/VideoActions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IEditForm {
  open: boolean;
  setOpen: () => void
}

// const mock = new Array<IDetails>(16).fill({ title: '123321', paragraphs: 'fasfafasfasfasfaf' })


export default function AddForm({ open, setOpen }: IEditForm) {
  const { id } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const { control, handleSubmit, register } = useForm<IVideo>({
    defaultValues: {
      title: '',
      videoLink: '',
      img: '',
      details: []
    },
    mode: 'onSubmit'
  })

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "details", // unique name for your Field Array

  });

  const handleClose = () => {
    setOpen();
  };

  const handleAddField = () => {
    append({ paragraphs: '', title: '' })
  }

  const submit: SubmitHandler<IVideo> = (data) => {
    dispatch(createVideo({ userId: id, videoInfo: { title: data.title, details: data.details, img: data.img, videoLink: data.videoLink } }))
    handleClose()
  }

  return (
    <form>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Видео
            </Typography>

            <Button autoFocus color="inherit" onClick={handleAddField}>
              Добавить поле
            </Button>

            <Button autoFocus color="inherit" onClick={handleSubmit(submit)}>
              Сохранить
            </Button>
          </Toolbar>
        </AppBar>
        <List>
        <Controller name='title' control={control} render={({ field }) =>
            <ListItem>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Название</InputLabel>
                <OutlinedInput
                  label="Название"
                  {...field}
                />
              </FormControl>
            </ListItem>
          } />

          <Controller name='videoLink' control={control} render={({ field }) =>
            <ListItem>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Видео</InputLabel>
                <OutlinedInput
                  label="Видео"
                  {...field}
                />
              </FormControl>
            </ListItem>
          } />

          <Controller name='img' control={control} render={({ field }) =>
            <ListItem>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Изображение</InputLabel>
                <OutlinedInput
                  label="Изображение"
                  {...field}
                />
              </FormControl>
            </ListItem>
          } />

          <Divider />

          {fields.map((field, idx) =>
            <div>
              <Button onClick={() => remove(idx)}>Удалить поле</Button>
              <ListItem sx={{ marginTop: 2 }}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Заголовок</InputLabel>
                  <OutlinedInput
                    key={field.id}
                    label="Заголовок"
                    {...register(`details.${idx}.title` as const)}
                  />
                </FormControl>
              </ListItem>

              <ListItem>
                <TextField
                  sx={{ m: 1 }}
                  fullWidth
                  label="Текст"
                  multiline
                  rows={4}
                  {...register(`details.${idx}.paragraphs` as const)}
                />
              </ListItem>

              <Divider />
            </div>

          )}
        </List>
      </Dialog>
    </form>
  );
}
