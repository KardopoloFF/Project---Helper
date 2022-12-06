import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewTaskObject, setNewTaskObject } from '../redux/slices/setNewTaskObjectSlice'
import { ICategories } from '../types/categories'
import { ITask } from '../types/task';
import Map from './Map'

export default function NewGeoCreatePage() {

  interface Istore {
    store: {};
    categories: Array<ICategories>;
    newTaskObj: ITask ; // не уверен
  }
  const newTaskObj = useSelector((store:Istore)=> store.newTaskObj);
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h6" component="h6">
         Выбрать локацию
      </Typography>
      <TextField name='text' id="filled-basic"  value={newTaskObj.geo ?? ''} onChange={(newValue) => {
                  dispatch(setNewTaskObject({geo: newValue}))
                }} label="Filled" variant="standard" />
      <Map />
      <Button  onClick={()=>dispatch(fetchNewTaskObject(newTaskObj))} variant="contained">Создать задание</Button>
    </>
  )
}
