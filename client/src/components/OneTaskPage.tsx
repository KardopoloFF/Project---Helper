import { Button, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ITask } from '../types/task'
import Map from './Map'
import { fetchOnePosts } from '../redux/slices/onePostSlice'
import { useNavigate } from 'react-router-dom'

export default function OneTaskPage() {

  interface Istore {
    store: {}
    onePost: ITask
  }
  const task = useSelector((store: Istore) => store.onePost)
  const dispatch = useDispatch()
  const startHandler = (task: ITask) => {
    dispatch(fetchOnePosts(task))
  }
  return (
    <>
      <CardContent style={{ backgroundColor: 'white', marginTop: '10px', borderRadius: '20px' }}>
        <div style={{ marginLeft: '15px' }}>
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
        </div>
        <CardActions style={{ marginTop: '15px' }}>
          <Button onClick={() => startHandler(task)} variant="contained" size="small">Start</Button>
          <Button size="small">Go back</Button>
        </CardActions>
      </CardContent>
      <Map />
    </>
  )
}
