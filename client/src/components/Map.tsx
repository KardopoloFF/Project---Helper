import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Map () {
  // const [country, setCountry] = useState({ latitude: 42.3, longitude: 69.6 });
  // const navigate = useNavigate();
  const [myMap, setMyMap] = useState(null)

  useEffect(() => {
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        // center: [55.75, 37.61],
        center: [40.19, 44.51],
        zoom: 11
      }, {
        searchControlProvider: 'yandex#search',
        suppressMapOpenBlock: true
      })
      map.controls.remove('geolocationControl'); // удаляем геолокацию
      // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      // map.controls.remove('searchControl') // удаляем поиск
      map.controls.remove('trafficControl') // удаляем контроль трафика
      map.controls.remove('typeSelector') // удаляем тип
      map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('rulerControl') // удаляем контрол правил
      map.behaviors.disable(['scrollZoom'])
      setMyMap(map)
    })
  }, [])

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '80px'}}>
      <h2 className='homeGreet'>Укажите адреса</h2>
        <TextField
          style={{ backgroundColor: 'white', width: '45ch'}}
          id="standard-size-normal"
          label="А - Город, улица, дом"
          variant="outlined"
        />
        <TextField
          style={{ backgroundColor: 'white', width: '45ch'}}
          id="standard-size-normal"
          label="Б - Город, улица, дом"
          variant="outlined"
        />
      </div>
      <Button style={{ marginLeft: '10px', marginTop: '10px'}} variant="contained">Далее</Button>
    </Box>
    <div className="yandex"
    style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginLeft: '40px' }}>
      <div
        className="img-fluid"
        style={{ width: '700px', height: '400px',  borderRadius: '20px', overflow: 'hidden' }}
        id="map"
      />
    </div>
    </div>
    </>
  )
}
