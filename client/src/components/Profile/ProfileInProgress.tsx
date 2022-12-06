import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ITask } from '../../types/task';
import { IUser } from '../../types/users';
import {fetchPosts} from '../../redux/slices/postsSlice'
import OneTask from '../OneTask'
import {checkAuth} from '../../redux/slices/userSlice'


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
      <div>{tasks.map((el) => el.status === 'В работе' && el.author === user.id ? <OneTask key={el.id} el={el} /> : null)}</div>
    </div>
  )
}
