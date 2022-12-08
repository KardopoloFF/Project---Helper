import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OneTask from './../OneTask'
import {ITask} from '../../types/task'
import {findUserPosts} from '../../redux/slices/currentUser'
import {updateUserPosts, doneUserPosts} from '../../redux/slices/currentUser'
import { fetchWorker } from '../../redux/slices/workerSlice'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../types/users'
import { fetchAllComments } from '../../redux/slices/allCommentsSlice'

interface Istore {
  store: {}
  userTasks: Array<ITask>
  worker: IUser
  }
  export default function ProfileApplications() {
    const navigate = useNavigate();
    const userTask = useSelector((store: Istore)=> store.userTasks)
    
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(findUserPosts())
  },[])
 

const submitHandler = (id:any) => {
  dispatch(updateUserPosts(id))
}

const doneHandler = (id:any) => {
  dispatch(doneUserPosts(id))
}
  return (
    <div>
      <h1>Заявки</h1>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {userTask?.map((el) => (el.status === 'На рассмотрении' ? <div key={el.id}>
        <em>Кто-то хочет выполнить эту задачу</em>
        <br />
        <Button onClick={()=>navigate(`/task/worker/${el.worker}`)} size="small">Подробнее об этом пользователе</Button>
        <OneTask el={el} />
        <button onClick={()=>submitHandler(el.id)}>approve</button></div> : null
      ))}
    </div>
    <h1>Выполняемые</h1>
    <div>
      {userTask?.map((el) => (el.status === 'В работе' ? <div key={el.id}> <OneTask  el={el} /><button onClick={()=>doneHandler(el.id)}>Работа выполнена</button></div> : null
      ))}
    </div>
    </div>
  )
}
