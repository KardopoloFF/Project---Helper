// @ts-nocheck

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import OneTask from './OneTask'
import { ITask } from '../types/task'
import { Container } from '@mui/system';
import { IUser } from '../types/users';
import OneComment from './OneComment';
import { Paper, Rating, TextField } from '@mui/material';
import { fetchNewComment, setNewComment } from '../redux/slices/newCommentSlice';
import { IComment } from '../types/comment';
import { fetchAllComments } from '../redux/slices/allCommentsSlice';
import { useLocation } from 'react-router-dom';
import { fetchWorker } from '../redux/slices/workerSlice';
import { setRatingRes } from '../redux/slices/ratingResSlice';

interface Istore {
  store: {};
  worker: IUser;
  user: IUser;
  allComments: Array<IComment>;
  newComment: IComment;
  ratingRes: number | null;
}

export default function WorkerProfile() {
  const location = useLocation();
  const id = Number(location.pathname.match(/\d/gmi));

  const worker = useSelector((store: Istore) => store?.worker);
  const user = useSelector((store: Istore) => store.user);
  const allComments = useSelector((store: Istore) => store.allComments)
  const newComment = useSelector((store: Istore) => store.newComment);
  const ratingRes = useSelector((store: Istore) => store.ratingRes)

  const dispatch = useDispatch();
  


  React.useEffect(() => {
    dispatch(fetchWorker(id));
    dispatch(fetchAllComments(id));
    dispatch(setNewComment({ author: user.id, addresat: id, rating: 5 }));
    // dispatch(setRatingRes(allComments));

  }, [])

  React.useEffect(() => {
    dispatch(fetchAllComments(id));
  }, [newComment, ratingRes])

  React.useEffect(() => {
    if (allComments.length) {
      dispatch(setRatingRes(allComments));
    }
  }, [allComments])


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Card sx={{ maxWidth: 350, maxHeight: 680}} style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        {/* <CardMedia
          component="img"
          alt="Profile Photo"
          style={{ width: '350px', height: '400px', display: 'flex', justifyContent: 'center' }}
        /> */}
        <img style={{ width: '350px', height: '500px', display: 'flex', justifyContent: 'center' }} 
        src="/sashaorigin.png" alt="pic" />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {worker?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ??????????????: {worker?.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {worker?.mail}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ?????????? ??????????????:
            <br />
            <Rating name="read-only" value={ratingRes} readOnly />
          </Typography>
        </CardContent>
      </Card>
      <div style={{ marginTop: '10px', marginLeft: '30px' }}>
        <h2 style={{ textAlign: 'start', margin: '10px' }}>
          ?????????????????????? ??????????????:
        </h2>
        
        <div>
          <Typography variant="body2" color="text.secondary">
            <div>
              {worker.Tasks?.map((el) => el.status === '??????????????????' ? <CardContent key={el.id}>
                <Paper>
                  <OneTask el={el} />
                </Paper>
              </CardContent> : null)}
            </div>
          </Typography>
        <h2 style={{ textAlign: 'start', margin: '10px' }}>
          ??????????????????????:
        </h2>
        <div style={{ marginLeft: '10px' }}>
          <TextField
            style={{ margin: '10px 0px', width: '250px' }}
            id="standard-multiline-static"
            label="??????????????????????"
            value={newComment.text}
            onChange={(e) => dispatch(setNewComment({ text: e.target.value }))}
            name='text'
            multiline
            rows={1}
            variant="outlined"
          />
        <h3 style={{ textAlign: 'start', margin: '10px' }}>
          ????????????
        </h3>
          <Rating
            style={{ margin: '10px 0px' }}
            name="rating"
            value={newComment.rating}
            onChange={(e, newValue) => {
              dispatch(setNewComment({ rating: newValue }));
            }}
          />
          <br />
          <Button style={{ margin: '10px 0px' }} onClick={(e) => {
            // dispatch(setNewComment({text: newText}));
            dispatch(fetchNewComment(newComment));
            dispatch(setNewComment({ text: '', rating: 5 }))
          }} variant="contained">
            ???????????????? ??????????????????????
          </Button>
          <Typography variant="body2" color="text.secondary" style={{ marginTop: '50px', margin: 'auto' }}>
            <div>
              {allComments?.map((el) => <OneComment key={el.id} comm={el} />)}
            </div>
          </Typography>
        </div>
        </div>
      </div>
    </div>

  );
}
