import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signupUserThunk } from '../../redux/slices/userSlice'


// axios.defaults.baseURL = 'http://localhost:3001/'

export default function Reg() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (

    <form onSubmit={(e) => { dispatch(signupUserThunk(e, Object.fromEntries(new FormData(e.target)))); navigate('/') }}>
      <div style={{
        display: 'flex', flexDirection: 'column', margin: 'auto', borderRadius: '20px', backgroundColor: 'white',
        border: 'solid 2px black', width: '300px', height: '425px', justifyContent: 'start', marginTop: '50px'
      }}>
        <Typography variant="h5" component="div" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          Регистрация
        </Typography>
        <TextField style={{ width: '250px', marginLeft: '25px', marginTop: '15px' }}
          id="outlined-name"
          label="Имя"
          name='name'
        />
        <TextField style={{ width: '250px', marginLeft: '25px', marginTop: '15px' }}
          id="outlined-name2"
          label="Почта"
          type="email"
          name='mail'
        />
        <TextField style={{ width: '250px', marginLeft: '25px', marginTop: '15px' }}
          id="outlined-name3"
          label="Телефон"
          name='phone'
        />
        <TextField style={{ width: '250px', marginLeft: '25px', marginTop: '15px' }}
          id="outlined-name4"
          label="Пароль"
          type="password"
          name='password'
        />
        <Button type='submit' variant="contained" style={{ width: '250px', marginLeft: '25px', marginTop: '30px' }}>Зарегистрироваться</Button>
      </div>
    </form>
  )
}
