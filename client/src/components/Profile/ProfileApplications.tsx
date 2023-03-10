// @ts-nocheck

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OneTask from './../OneTask'
import { ITask } from '../../types/task'
import { findUserPosts } from '../../redux/slices/currentUser'
import { updateUserPosts, doneUserPosts } from '../../redux/slices/currentUser'
import { fetchWorker } from '../../redux/slices/workerSlice'
import { Button, CardContent, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../types/users'
import { fetchAllComments } from '../../redux/slices/allCommentsSlice'
import { Stack } from '@mui/system'

interface Istore {
  store: {}
  userTasks: Array<ITask>
  worker: IUser
}
export default function ProfileApplications() {
  const navigate = useNavigate();
  const userTask = useSelector((store: Istore) => store.userTasks)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findUserPosts())
  }, [])


  const submitHandler = (id: any) => {
    dispatch(updateUserPosts(id))
  }

  const doneHandler = (id: any) => {
    dispatch(doneUserPosts(id))
  }
  return (
    <div>
      <h1 style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        backgroundColor: 'white', margin: '10px', height: '50px', width: '150px',
        borderRadius: '10px', border: 'solid 2px black'
      }}>
        Заявки
      </h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {userTask?.map((el) => (el.status === 'На рассмотрении' ?
          <CardContent key={el.id}>
            <Paper style={{ border: 'solid 2px black', padding: '20px', borderRadius: '15px' }} >
              <OneTask el={el} />
              <em>Кто-то хочет выполнить эту задачу</em>
              <br />
              <Stack style={{ magin: '5px', }}>
                <Button style={{ marginTop: '15px', display: 'flex', justifyContent: 'start' }} variant="text" onClick={() => navigate(`/task/worker/${el.worker}`)} size="small">Подробнее об этом пользователе</Button>
                <Button style={{ marginTop: '15px', width: '120px' }} variant="contained" onClick={() => submitHandler(el.id)}>Одобрить</Button>
              </Stack>
            </Paper>
          </CardContent>
          : null
        ))}
      </div>
      <h1 style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        backgroundColor: 'white', margin: '10px', height: '50px', width: '250px',
        borderRadius: '10px', border: 'solid 2px black'
      }}>
        Выполняемые
      </h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {userTask?.map((el) => (el.status === 'В работе' ? <CardContent key={el.id}>
          <Paper style={{ border: 'solid 2px black', padding: '20px', borderRadius: '15px' }} >
            <OneTask el={el} />
            <Stack>
              <Button variant="contained" onClick={() => doneHandler(el.id)}>Работа выполнена</Button>
            </Stack>
          </Paper>
        </CardContent> : null
        ))}
      </div>
    </div>
  )
}
