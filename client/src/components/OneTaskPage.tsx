import { Button, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ITask} from '../types/task'

export default function OneTaskPage() {
    interface Istore {
        store: {}
        onePost:ITask
        }
    const task = useSelector((store:Istore)=> store.onePost)
  return (
    <>
    <React.Fragment>
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
      <Button size="small">Start</Button>
      <Button size="small">Go back</Button>
    </CardActions>
  </React.Fragment>
  </>
  )
}
