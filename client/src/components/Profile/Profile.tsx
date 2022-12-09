// @ts-nocheck

import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import OneTask from '../OneTask'
import { ITask } from '../../types/task'
import { IUser } from '../../types/users';
import { Paper, Rating, TextField } from '@mui/material';
import OneComment from '../OneComment';
import { IComment } from '../../types/comment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllComments } from '../../redux/slices/allCommentsSlice';
import { setRatingRes } from '../../redux/slices/ratingResSlice';

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
  const tasks = useSelector((store: Istore) => store.posts)
  const user = useSelector((store: Istore) => store.user)
  const allComments = useSelector((store: Istore) => store.allComments)
  const ratingRes = useSelector((store: Istore) => store.ratingRes)


  useEffect(() => {
    dispatch(fetchAllComments(user?.id))
  }, [])

  React.useEffect(() => {
    if (allComments.length) {
      dispatch(setRatingRes(allComments));
    }
  }, [allComments])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Card sx={{ maxWidth: 350 }} style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        <CardMedia
          component="img"
          image={user?.img}
          alt="Profile Photo"
          style={{ width: '350px', height: '400px', display: 'flex', justifyContent: 'center' }}
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
            Общий рейтинг:
            <br />
            <Rating name="read-only" value={ratingRes} readOnly />
          </Typography>
        </CardContent>
      </Card>
      <div style={{ marginTop: '10px', marginLeft: '30px'}}>
        <h2 style={{ textAlign: 'start', margin: '10px' }}>
          Выполненные задания:
        </h2>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px'}}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {tasks?.map((el) => el.status === 'Выполнено' && (el.author === user.id || el.worker === user.id)  ? <CardContent key={el.id}>
        <Paper>
          <OneTask el={el}/>
          </Paper>
        </CardContent> : null)} 
        </div>
        </Typography>
        <h2 style={{ textAlign: 'start', margin: '10px' }}>
          Комментарии:
        </h2>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px', margin: '5px' }}>
          <div>
            {allComments?.map((el) => <OneComment key={el.id} comm={el} />)}
          </div>
        </Typography>
      </div>
    </div>
  );
}