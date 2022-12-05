import React, { FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ITask} from '../types/task'
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux'
import {setOnePost} from '../redux/slices/onePostSlice'

interface TaskProps {
    el: ITask
  }

export default function OneTask({ el }:TaskProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandler = (el:ITask) => {
    dispatch(setOnePost(el))
    navigate('/task/info')
  }
const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 18 }} variant="h5" gutterBottom>
      <b>{el.title}</b>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {el.date.toString()}
      </Typography>
      <Typography variant="body2">
      {el.text}
        <br />
        </Typography>
        <Typography>
          <br />
        <em>{el.status}</em>
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={()=>clickHandler(el)} size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

  return (
    <Box sx={{ width: 300, display: 'flex', margin: '5px'}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}
