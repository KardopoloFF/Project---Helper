import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import OneTask from './OneTask'
import {ITask} from '../types/task'
import { Container } from '@mui/system';
import { IUser } from '../types/users';
import OneComment from './OneComment';
import { Rating } from '@mui/material';

interface Istore {
  store: {};
  worker: IUser;
  }

export default function WorkerProfile() {
  const worker = useSelector((store: Istore) => store.worker)
  const ratingRes = (worker?.Comments?.reduce((a,b)=>(a+b.rating), 0))/(worker?.Comments?.length)
  
  
  return (
      <>
    <Card sx={{ maxWidth: 650 }} style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
      <CardMedia
        component="img"
        width='200'
        height="450"
        image="/unknown2.jpg"
        alt="Profile Photo"
        />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Имя: {worker?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Телефон: {worker?.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {worker?.mail}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          Общий рейтинг: <Rating name="read-only" value={ratingRes} readOnly />
          {/* {(worker?.Comments?.reduce((a,b)=>(a+b.rating), 0))(worker?.Comments?.length)} */}
        </Typography>
      </CardContent>
    </Card>
    {/* <Card sx={{ maxWidth: 650 }} style={{ marginTop: '50px', margin: 'auto' }}> */}
    <div style={{ marginTop: '50px', margin: 'auto' }}>
        <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
          Выполненные задания:
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '50px', margin: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {worker.Tasks?.map((el) => <OneTask key={el.id} el={el}/>)} 
        </div>
        </Typography>
         <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
          Комментарии:
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '50px', margin: 'auto' }}>
          <div>
        {worker.Comments?.map((el) => <OneComment key={el.id} comm={el}/>)} 
        </div>
        </Typography>

    </div>
    {/* </Card> */}
    </>
  );
}
