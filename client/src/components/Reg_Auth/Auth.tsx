import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUserThunk } from '../../redux/slices/userSlice'
import { IUser } from '../../types/users';


// axios.defaults.baseURL = 'http://localhost:3001/'

export default function Reg () {
  const dispatch: any = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store:any) => store.user)
  return (
      <form onSubmit={(e) => {dispatch(loginUserThunk(e, Object.fromEntries(new FormData(e.target)))); navigate('/')}}>
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px', alignItems: 'center' }}>
    <TextField style={{ width: '250px', marginTop: '30px' }}
    id="outlined-name2"
    label="Почта"
    type="email"
    name='mail'
    />
      <TextField style={{ width: '250px', marginTop: '30px' }}
    id="outlined-name4"
    label="Пароль"
    type="password"
    name='password'
    />
  <Button type='submit' variant="contained" style={{ width: '250px', marginTop: '30px' }}>Войти</Button>
  </div>
  </form>
  )
}