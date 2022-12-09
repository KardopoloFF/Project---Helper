// @ts-nocheck

import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUserThunk } from '../../redux/slices/userSlice'
import { IUser } from '../../types/users';


// axios.defaults.baseURL = 'http://localhost:3001/'

export default function Reg() {
  const dispatch: any = useDispatch()
  const navigate = useNavigate()
  return (
    <form onSubmit={(e) => { dispatch(loginUserThunk(e, Object.fromEntries(new FormData(e.target)))); navigate('/') }}>
      <div style={{
        display: 'flex', flexDirection: 'column', margin: 'auto', justifyContent: 'start', marginTop: '50px',
        borderRadius: '20px', backgroundColor: 'white', border: 'solid 2px black', width: '300px', height: '270px'
      }}>
        <Typography variant="h5" component="div" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          Вход
        </Typography>
        <TextField style={{ width: '250px', marginTop: '15px', marginLeft: '25px', display: 'flex', justifyContent: 'center' }}
          id="outlined-name2"
          label="Почта"
          type="email"
          name='mail'
        />
        <TextField style={{ width: '250px', marginTop: '10px', marginLeft: '25px', display: 'flex', justifyContent: 'center' }}
          id="outlined-name4"
          label="Пароль"
          type="password"
          name='password'
        />
        <Button type='submit' variant="contained" style={{ width: '250px', marginTop: '20px', marginLeft: '25px' }}>Войти</Button>
      </div>
    </form>
  )
}
