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


//  <div>
//           {tasks.map((el) => el.status === 'Ждет исполнителя' ? ((el.worker ? <div>
//           <em>Эту задачу предлагает выполнить пользователь {el.worker}</em>
//           <Button onClick={()=>detailsHandler(el.worker)} size="small">Подробнее о пользователе</Button> <OneTask key={el.id} el={el} />
//           </div> : <OneTask key={el.id} el={el} />)) : null)}
//         </div>
// добавить эту проверку НЕ УДАЛЯТЬ