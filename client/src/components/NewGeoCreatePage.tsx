import { Button, Container, TextField, Typography } from '@mui/material'
import { fetchNewTaskObject, setNewTaskObject } from '../redux/slices/setNewTaskObjectSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICategories } from '../types/categories'
import { ITask } from '../types/task';
import Map from './Map'

export default function NewGeoCreatePage() {

  interface Istore {
    store: {};
    categories: Array<ICategories>;
    newTaskObj: ITask; // не уверен
  }
  const newTaskObj = useSelector((store: Istore) => store.newTaskObj);
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Container style={{ display: 'flex', flexDirection: 'column', width: '300px', borderRadius: '20px', overflow: 'hidden', height: '180px', marginTop: '40px', backgroundColor: 'white', justifyContent: 'center' }}>
          <Typography variant="h6" component="h6">
            Выбрать локацию
          </Typography>
          <TextField name='text' id="filled-basic" value={newTaskObj.geo ?? ''} onChange={(newValue) => {
            dispatch(setNewTaskObject({ geo: newValue }))
          }} label="Укажите адрес" variant="standard" />
          <Button style={{ width: '200px', marginTop: '20px' }} onClick={() => dispatch(fetchNewTaskObject(newTaskObj))} variant="contained">Создать задание</Button>
        </Container>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Map />
        </div>
      </div>
    </>
  )
}