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
    <div>
      {avatar 
        ? <img src={` ${avatar} `} alt="avatar" />
        : <img src="" alt="avatar" />}
      {/* <input type="file" onChange={e => setImg(e.target.files[0])}/>  */}
      <button type='submit' onClick={sendFile}>send</button>
    </div>
  )
}
