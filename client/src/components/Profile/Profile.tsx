import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import OneTask from '../OneTask'
import {ITask} from '../../types/task'
import { Container } from '@mui/system';

interface Istore {
  store: {}
  posts: Array<ITask>
  }

export default function Profile() {
  const tasks = useSelector((store:Istore)=> store.posts)
  const user = useSelector((store: any) => store.user)
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
          Имя: {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
    </Card>
    {/* <Card sx={{ maxWidth: 650 }} style={{ marginTop: '50px', margin: 'auto' }}> */}
    <div style={{ marginTop: '50px', margin: 'auto' }}>
        <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
          Мои задания:
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '50px', margin: 'auto' }}>
          <div>
        {tasks.map((el) => <OneTask key={el.id} el={el}/>)} 
        </div>
        </Typography>
    </div>
    {/* </Card> */}
    </>
  );
}