import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OneTask from './../OneTask'
import {ITask} from '../../types/task'
import {findUserPosts} from '../../redux/slices/currentUser'
import {updateUserPosts} from '../../redux/slices/currentUser'

interface Istore {
  store: {}
  userTasks: Array<ITask>
  }
  export default function ProfileApplications() {
    const userTask = useSelector((store: Istore)=> store.userTasks)
    
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(findUserPosts())
  },[])
const submitHandler = (id:any) => {
  dispatch(updateUserPosts(id))
}
  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {userTask.map((el) => (el.status === 'На рассмотрении' ? <div key={el.id}> <OneTask  el={el} /><button onClick={()=>submitHandler(el.id)}>approve</button></div> : null
      ))}
    </div>
    </div>
  )
}