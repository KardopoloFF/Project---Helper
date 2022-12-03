import React, { useEffect, useState } from 'react'

export default function Map () {
  // const [country, setCountry] = useState({ latitude: 42.3, longitude: 69.6 });
  // const navigate = useNavigate();
  const [myMap, setMyMap] = useState(null)

  useEffect(() => {
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [37.61,55.75],
        zoom: 7
      }, {
        searchControlProvider: 'yandex#search',
        suppressMapOpenBlock: true
      })
      // map.controls.remove('geolocationControl'); // удаляем геолокацию
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
    <div className="yandex"
    style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div
        className="img-fluid"
        style={{ width: '800px', height: '400px', border: 'solid 3px black' }}
        id="map"
      />
    </div>
  )
}
