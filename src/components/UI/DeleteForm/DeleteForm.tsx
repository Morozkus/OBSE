import { Modal, Box, Typography, Button } from "@mui/material"
import { useAppDispatch } from "../../../hooks/redux";
import { deleteVideo, getAllVideos } from "../../../store/actions/VideoActions";

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IDeleteForm {
  isOpen: boolean;
  setOpen: () => void;
  id?: number;
}

const DeleteForm = ({ isOpen, setOpen, id }: IDeleteForm) => {
  const dispatch = useAppDispatch()

  const deleteHandler = async () => {
    if (id) {
      await dispatch(deleteVideo(id))
      await dispatch(getAllVideos())
    }
    setOpen()
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={setOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Вы действительно хотите удалить эту запись?
          </Typography>
          <Button onClick={setOpen}>Отмена</Button>
          <Button onClick={deleteHandler}>Удалить</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default DeleteForm