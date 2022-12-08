import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import OneTask from '../OneTask'
import {ITask} from '../../types/task'
import { IUser } from '../../types/users';
import { Rating, TextField } from '@mui/material';
import OneComment from '../OneComment';
import { IComment } from '../../types/comment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllComments } from '../../redux/slices/allCommentsSlice';

interface Istore {
  store: {}
  posts: Array<ITask>
  user: IUser
  worker: IUser
  allComments: Array<IComment>;
  ratingRes: number | null;
  }

export default function Profile() {
  const dispatch = useDispatch();
  const tasks = useSelector((store:Istore)=> store.posts)
  const user = useSelector((store:Istore) => store.user)
  const allComments = useSelector((store: Istore)=> store.allComments)
  const ratingRes = useSelector((store: Istore)=> store.ratingRes)


  useEffect(() => {
    dispatch(fetchAllComments(user?.id))
  },[])
  return (
    <>
    <Card sx={{ maxWidth: 650 }} style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
      <CardMedia
        component="img"
        width='200'
        height="450"
        image={user?.img} // ?????
        alt="Profile Photo"
        />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {user?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Телефон: {user?.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {user?.mail}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          Общий рейтинг: <Rating name="read-only" value={ratingRes} readOnly />
        </Typography>
      </CardContent>
    </Card>
    <div style={{ marginTop: '50px', margin: 'auto' }}>

        <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
          Выполненные задания:
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '50px', margin: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {user.Tasks?.map((el) => <OneTask key={el.id} el={el}/>)} 
        </div>
        </Typography>
         <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
          Комментарии:
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '50px', margin: 'auto' }}>
          <div>
        {allComments?.map((el) => <OneComment key={el.id} comm={el}/>)} 
        </div>
        </Typography>

    </div>
    </>
  );
}