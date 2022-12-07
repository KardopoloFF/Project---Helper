import React, { FC, PropsWithChildren, ReactElement, ReactNode, useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ITask} from '../types/task'
import { useLocation, useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux'
import {setOnePost} from '../redux/slices/onePostSlice'
import Map from './Map';
import { fetchWorker, setWorker } from '../redux/slices/workerSlice';
import { IUser } from '../types/users';


interface Istore {
  store: {};
  worker: IUser;
  }

interface TaskProps {
  store: {}
  el: ITask
  worker: IUser
}

export default function OneTask({ el }:TaskProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentWorker = useSelector((store:Istore) => store.worker);
  
  
  const clickHandler = (el:ITask) => {
    dispatch(setOnePost(el))
    navigate('/task/info')
  }
  
  useEffect(() => {
    if(currentWorker.id) {
      navigate('/task/worker')
    }
  }, [currentWorker])

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
        <Typography>
          <br />
        <em>{el.status}</em>
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={()=>clickHandler(el)} size="small">Подробнее</Button>
      {/* {yes &&
      <>
        <Button size="small">НЕТ</Button>
        <Button size="small">Да</Button>
      </>
      } */}
    </CardActions>
  </React.Fragment>
);

  return (
      <Box sx={{ width: 300, margin: '5px' }}>
        <Card variant="outlined">{card}</Card>
      </Box>
  )
}
