import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useCallback, useState } from 'react'

axios.defaults.baseURL = 'http://localhost:3001/'

export default function Reg() {
  const [img, setImg] = useState<any>(null)
  const [avatar, setAvatar] = useState(null)

  const sendFile = useCallback(async () => {
    try {
      const data = new FormData()
      data.append('avatar', img)

      await axios.post('api/upload', data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })

      .then(res => setAvatar(res.data.path))
    } catch (error) {
      console.log(error);
      
    }
  }, [img])


  return (
    <>
    <div style={{ display: "flex", justifyContent: 'center', marginTop: '250px', alignItems: 'center'}}>
      {avatar 
        ? <img src={` ${avatar} `} alt="avatar" />
        : <img src="" alt="avatar" />}
      <input type="file" onChange={e => setImg(e.target.files[0])}/> 
      <button type='submit' onClick={sendFile}>send</button>
    </div>
    <div style={{display: "flex", flexDirection: "column", marginTop: '50px', alignItems: 'center'}}>
    <TextField style={{width: '250px', marginTop: '30px'}}
    id="outlined-name"
    label="Имя"
    // value={name}
    // onChange={handleChange}
  />
    <TextField style={{width: '250px', marginTop: '30px'}}
    id="outlined-name"
    label="Почта"
    // value={name}
    // onChange={handleChange}
  />
      <TextField style={{width: '250px', marginTop: '30px'}}
    id="outlined-name"
    label="Телефон"
    // value={name}
    // onChange={handleChange}
  />
      <TextField style={{width: '250px', marginTop: '30px'}}
    id="outlined-name"
    label="Пароль"
    // value={name}
    // onChange={handleChange}
  />
  <Button variant="contained" style={{width: '250px', marginTop: '30px'}}>Зарегистрироваться</Button>
  </div>
</>
  )
}
