import React from 'react'
import styles from './style.module.css'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material'
import EditForm from '../../components/UI/EditForm/EditForm'

const mock = new Array(16).fill({ img: 'https://marisakantor.com.ar/wp-content/uploads/2019/10/01-Responsive-Website.jpg', id: 1, title: '123321' })

const Admin = () => {
  return (
    <>
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
            {mock.map((el, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {el?.id}
                </TableCell>
                <TableCell align="center">{el?.title}</TableCell>
                <TableCell align="center"><Button variant='contained'>Редактировать</Button></TableCell>
                <TableCell align="center"><Button variant='contained'>Удалить</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <EditForm open={true} setOpen={() => 1} />
    </>
  )
}

export default Admin