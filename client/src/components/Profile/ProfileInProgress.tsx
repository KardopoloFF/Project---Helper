// @ts-nocheck

import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ITask } from '../../types/task';
import { IUser } from '../../types/users';
import {fetchPosts} from '../../redux/slices/postsSlice'
import OneTask from '../OneTask'
import {checkAuth} from '../../redux/slices/userSlice'
import { CardContent, Paper } from '@mui/material';


interface Istore {
  store: {}
  user: IUser
  posts: Array<ITask>
}

export default function ProfileInProgress() {
  const dispatch = useDispatch();
  const tasks = useSelector((store:Istore)=> store.posts)
    const user = useSelector((store:Istore) => store.user)
    
    useEffect(()=>{
      dispatch(fetchPosts({frst: true,scnd: true,thrd: true,four: true,five: true,})),
      dispatch(checkAuth())},[])
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>{tasks.map((el) => el.status === 'В работе' && el.author === user.id ? <CardContent key={el.id}>
        <Paper>
          <OneTask el={el} />
        </Paper>
      </CardContent> : null)}</div>
    </div>
  )
}
