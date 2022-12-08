import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ITask } from '../types/task'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setOnePost } from '../redux/slices/onePostSlice'
import Map from './Map';
import { IUser } from '../types/users';
import { setNewTaskObject } from '../redux/slices/setNewTaskObjectSlice';


interface Istore {
  store: {};
  worker: IUser;
}

interface TaskProps {
  store: {}
  el: ITask
  worker: IUser
}

export default function OneTask({ el }: TaskProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const clickHandler = (el: ITask) => {
    dispatch(setOnePost(el))
    dispatch(setNewTaskObject(el.geo))
    navigate('/task/info')
  }
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} variant="h5" gutterBottom>
          <b>{el.title}</b>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {el.date?.toString()}
        </Typography>
        <Typography variant="body2">
          {el.text}
          <br />
        </Typography>
        <Typography variant="body2">
        <br />
      Вознаграждение: {el.price}
        </Typography>
        <Typography>
          <br />
          <em>{el.status}</em>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => clickHandler(el)} size="small">Подробнее</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
      <Box sx={{ width: '300px', margin: '10px' }}>
        <Card variant="outlined" style={{ height: '300px' }}>{card}</Card>
      </Box>
  )
}
