import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signupUserThunk } from '../../redux/userSlice'
import { IUser } from '../../types/users';


// axios.defaults.baseURL = 'http://localhost:3001/'

export default function Reg () {
//   const [img, setImg] = useState<any>(null)
//   const [avatar, setAvatar] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store:any) => store.user)
   

  // const [control, setControl] = useState({name : name, email: email, phone: phone, pass: password})
  //   const sendFile = useCallback(async () => {
  //     try {
  //       const data = new FormData()
  //       data.append('avatar', img) 


  //       await axios.post('api/upload', data, {
  //         headers: {
  //           'content-type': 'multipart/form-data'
  //         }
  //       })

  //       .then(res => setAvatar(res.data.path))
  //     } catch (error) {
  //       console.log(error);

  //     }
  //   }, [img])

  return (
  //       <>
  //     <div style={{ display: "flex", justifyContent: 'center', marginTop: '250px', alignItems: 'center'}}>
  //       {avatar
  //         ? <img src={` ${avatar} `} alt="avatar" />
  //         : <img src="" alt="avatar" />}
  //       <input type="file" onChange={e => setImg(e.target.files[0])}/>
  //       <button type='submit' onClick={sendFile}>send</button>
  //     </div>
      <form onSubmit={(e) => dispatch(signupUserThunk(e, Object.fromEntries(new FormData(e.target))))}>
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px', alignItems: 'center' }}>
    <TextField style={{ width: '250px', marginTop: '30px' }}
    id="outlined-name"
    label="Имя"
    name='name'
    // value={name}
    // onChange={handleChange}
    />
    <TextField style={{ width: '250px', marginTop: '30px' }}
    id="outlined-name2"
    label="Почта"
    type="email"
    name='mail'
    // value={email}
    // onChange={handleChange}
    />
      <TextField style={{ width: '250px', marginTop: '30px' }}
    id="outlined-name3"
    label="Телефон"
    name='phone'
    // value={phone}
    // onChange={handleChange}
    />
      <TextField style={{ width: '250px', marginTop: '30px' }}
    id="outlined-name4"
    label="Пароль"
    type="password"
    name='password'
    // value={password}
    // onChange={handleChange}
    />
  <Button type='submit' variant="contained" style={{ width: '250px', marginTop: '30px' }}>Зарегистрироваться</Button>
  </div>
  </form>
  )
}
