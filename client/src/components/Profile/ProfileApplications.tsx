import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OneTask from './../OneTask'
import {ITask} from '../../types/task'
import {findUserPosts} from '../../redux/slices/currentUser'
import {updateUserPosts} from '../../redux/slices/currentUser'
import { fetchWorker } from '../../redux/slices/workerSlice'
import { Button } from '@mui/material'

interface Istore {
  store: {}
  userTasks: Array<ITask>
  }
  export default function ProfileApplications() {
    const userTask = useSelector((store: Istore)=> store.userTasks)
    
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(findUserPosts())
      console.log(userTask,'USERTASK');
      
  },[])
const submitHandler = (id:any) => {
  dispatch(updateUserPosts(id))
}

const detailsHandler = (id: number | null) => {
    dispatch(fetchWorker(id));
  }


  return (
    userTask && (
    <div>
      На рассмотрении
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {userTask.map((el) => (el.status === 'На рассмотрении' ? <div key={el.id}> <OneTask  el={el} /><button onClick={()=>submitHandler(el.id)}>approve</button></div> : null
      ))}
    </div>
    Ждет исполнителя 
    <div>
          {/* {userTask.map((el) => (el?.status === 'Ждет исполнителя' ? (el?.worker ? (<div key={el.id}>
          <em>Эту задачу предлагает выполнить пользователь {el?.worker}</em>
          <Button onClick={()=>detailsHandler(el.worker)} size="small">Подробнее о пользователе</Button> <OneTask  el={el} />
          </div>) : <OneTask key={el.id} el={el} />) : null
          )} */}
          {userTask.map((el) => {
            if (el.status === )
          })}

        </div>
    </div>
    )
  )
}


//  <div>
//           {tasks.map((el) => el.status === 'Ждет исполнителя' ? ((el.worker ? <div>
//           <em>Эту задачу предлагает выполнить пользователь {el.worker}</em>
//           <Button onClick={()=>detailsHandler(el.worker)} size="small">Подробнее о пользователе</Button> <OneTask key={el.id} el={el} />
//           </div> : <OneTask key={el.id} el={el} />)) : null)}
//         </div>
// добавить эту проверку НЕ УДАЛЯТЬ