import { Button, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ITask } from '../types/task'
import { useNavigate } from 'react-router-dom';
import Map from './Map'
import { fetchOnePosts, setOnePost } from '../redux/slices/onePostSlice'

export default function OneTaskPage() {
  interface Istore {
    store: {}
    onePost: ITask
  }
  const task = useSelector((store: Istore) => store.onePost)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const startHandler = (task: ITask) => {
    dispatch(fetchOnePosts(task))
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <div style={{
        display: 'flex', flexDirection: 'column', border: 'solid 2px black', justifyContent: 'center', width: '300px',
        borderRadius: '20px', overflow: 'hidden', backgroundColor: 'white', height: '300px', marginTop: '40px',
      }}>
        <CardContent style={{ marginLeft: '10px', marginBottom: '20px' }}>
          <Typography sx={{ fontSize: 18 }} variant="h5" gutterBottom>
            <b>{task.title}</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {task.date?.toString()}
          </Typography>
          <Typography variant="body2">
            {task.text}
            <br />
          </Typography>
          <Typography>
            <br />
            <em>{task.status}</em>
          </Typography>
        </CardContent>
        <CardActions style={{ marginLeft: '15px' }}>
          <Button variant="contained" onClick={() => startHandler(task)} size="small">Start</Button>
          <Button onClick={() => { navigate(-1); dispatch(setOnePost([])) }} size="small">Go back</Button>
        </CardActions>
      </div>
      <Map />
    </div >
  )
}
