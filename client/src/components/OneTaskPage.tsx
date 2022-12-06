import { Button, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ITask} from '../types/task'
import Map from './Map'
import {fetchOnePosts} from '../redux/slices/onePostSlice'
import { useNavigate } from 'react-router-dom';

export default function OneTaskPage() {
    interface Istore {
        store: {}
        onePost:ITask
        }
    const task = useSelector((store:Istore)=> store.onePost)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const startHandler = (task:ITask) =>{
        dispatch(fetchOnePosts(task))
    }
  return (
    <>
    <CardContent>
      <Typography sx={{ fontSize: 18 }} variant="h5" gutterBottom>
      <b>{task.title}</b>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {task.date.toString()}
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
    <CardActions>
      <Button onClick={()=>startHandler(task)} size="small">Start</Button>
      <Button onClick={()=> navigate('/task/find')} size="small">Go back</Button>
    </CardActions>
    <Map />
  </>
  )
}
