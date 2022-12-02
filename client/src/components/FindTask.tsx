import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OneTask from './OneTask'
import {ITask} from '../types/task'
import {fetchPosts} from '../redux/postsSlice'

interface Istore {
store: {}
posts: Array<ITask>
}

export default function FindTask() {
    const tasks = useSelector((store:Istore)=> store.posts)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
  return (
    <div>
       {tasks.map((el) => <OneTask key={el.id} el={el}/>)} 
    </div>
  )
}
