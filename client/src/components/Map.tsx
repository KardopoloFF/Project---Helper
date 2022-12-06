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
      map.events.add('click', function (e) {
    map.balloon.open(e.get('coords'), 'Щелк!');}); // открывает балун в месте клика, потенциально с координатами клика
      setMyMap(map)
    })
  }, [])

  return (
    <div className="yandex"
    style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div
        className="img-fluid"
        style={{ width: '800px', height: '400px', border: 'solid 3px black', borderRadius: '25px', overflow: 'hidden' }}
        id="map"
      />
    </div>
  )
}
