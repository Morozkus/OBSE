import { useEffect, useState } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material'
import EditForm from '../../components/UI/EditForm/EditForm'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getAllVideos } from '../../store/actions/VideoActions'
import DeleteForm from '../../components/UI/DeleteForm/DeleteForm'
import AddForm from '../../components/UI/AddForm/AddForm'

// const mock = new Array(16).fill({ img: 'https://marisakantor.com.ar/wp-content/uploads/2019/10/01-Responsive-Website.jpg', id: 1, title: '123321' })
interface ModalWithId {
  open: boolean;
  id: undefined | number
}

const Admin = () => {
  const { videos } = useAppSelector(state => state.video)
  const dispatch = useAppDispatch()

  const [isAddModal, setAddModal] = useState(false)
  const [isEditModal, setEditModal] = useState<ModalWithId>({ open: false, id: undefined })
  const [isDeleteModal, setDeleteModal] = useState<ModalWithId>({ open: false, id: undefined })

  useEffect(() => {
    dispatch(getAllVideos())
  }, [dispatch])

  return (
    <>
      <Button variant='contained' sx={{ margin: '10px 0' }} onClick={() => setAddModal(true)}>Создать запись</Button>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Название</TableCell>
              <TableCell align="center">Редактирование</TableCell>
              <TableCell align="center">Удаление</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {videos.map((el, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {el.id}
                </TableCell>
                <TableCell align="center">{el?.title}</TableCell>
                <TableCell align="center"><Button variant='contained' onClick={() => setEditModal({ id: el.id, open: true })}>Редактировать</Button></TableCell>
                <TableCell align="center"><Button variant='contained' onClick={() => setDeleteModal({ id: el.id, open: true })}>Удалить</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <EditForm id={isEditModal.id} open={isEditModal.open} setOpen={() => setEditModal({ id: undefined, open: false })} />
      <DeleteForm id={isDeleteModal.id} isOpen={isDeleteModal.open} setOpen={() => setDeleteModal({ id: undefined, open: false })} />
      <AddForm open={isAddModal} setOpen={() => setAddModal(false)} />
    </>
  )
}

export default Admin