import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OneTask from './../OneTask'
import {ITask} from '../../types/task'
import {findUserPosts} from '../../redux/slices/currentUser'

interface Istore {
  store: {}
  posts: Array<ITask>
  }
  export default function ProfileApplications() {
    const userTask = useSelector((store: any)=> store.userTasks)
    
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(findUserPosts())
  },[])

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {userTask.map((el: any) => <OneTask key={el.id} el={el} />)}
    </div>
  )
}