import { Typography } from '@mui/material'
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

  // useEffect(() => {
  //   dispatch(setOneTask())
  // }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{
        width: '290px', height: '65px', backgroundColor: 'white',
        borderRadius: '20px', marginTop: '190px', border: 'solid 2px black'
      }}>
          <Typography style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }} variant="h6" component="h6">
            Укажите адрес на карте
          </Typography>
          {/* <TextField name='text' id="filled-basic" value={newTaskObj.geo ?? ''} onChange={(newValue) => {
            dispatch(setNewTaskObject({ geo: newValue }))
          }} label="" variant="standard" /> */}
          {/* <Button style={{ width: '200px', marginTop: '20px' }} onClick={() => dispatch(fetchNewTaskObject(newTaskObj))} variant="contained">Создать задание</Button> */}
      </div>
      <Map />
    </div>
  )
}