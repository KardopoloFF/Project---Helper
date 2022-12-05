import { Box, Button, TextField } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import { ITask } from '../types/task'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

interface Istore {
  store: {}
  posts: Array<ITask>
}

export default function Map() {
  const [task, setTask] = useState({ latitude: 42.3, longitude: 69.6 });
  const [myMap, setMyMap] = useState(null);
  const [tasksOnMap, setTasksOnMap] = useState([]);
  const tasks = useSelector((store: Istore) => store.posts)

  useEffect(() => {
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [55.75, 37.61], // Moscow
        // center: [40.19, 44.51], // Erevan
        zoom: 10.5
      }, {
        searchControlProvider: 'yandex#search',
        suppressMapOpenBlock: true
      })
      // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      // map.controls.remove('searchControl') // удаляем поиск
      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('trafficControl') // удаляем контроль трафика
      map.controls.remove('typeSelector') // удаляем тип
      map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('rulerControl') // удаляем контрол правил
      map.behaviors.disable(['scrollZoom'])
      setMyMap(map)
    })
  }, [])

  useEffect(() => {
    fetch('/task/find')
      .then((res) => res.json())
      .then((data) => {
        setTasksOnMap(data);
      });

    ymaps.ready(() => {
      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass( // Создаём макет содержимого.
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      );

      tasksOnMap.forEach((el) => {
        const myGeocoder = ymaps.geocode(el.geo);
        myGeocoder.then(
          (res) => {
            const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            const myPlacemarkWithContent = new ymaps.Placemark(coordinates, {
              hintContent: el.title,
              balloonContent: el.date,
              iconContent: '',
            }, {
              iconLayout: 'default#imageWithContent', // Необходимо указать данный тип макета.
              // iconImageHref: el.img, // Своё изображение иконки метки.
              iconImageSize: [40, 40], // Размеры метки.
              iconImageOffset: [-24, -24], // Смещение левого верхнего угла иконки относительно, её "ножки" (точки привязки).
              iconContentOffset: [15, 15], // Смещение слоя с содержимым относительно слоя с картинкой.
              iconContentLayout: MyIconContentLayout, // Макет содержимого.
            });
            myMap?.geoObjects
              .add(myPlacemarkWithContent);

          },
        );
      });
    });
  }, [myMap, task]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
        </Box>
        <div className="yandex"
          style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginLeft: '20px' }}>
          <Button style={{ marginRight: '50px' }}><PlaceIcon />Найти на карте</Button>
          <div
            className="img-fluid"
            style={{ width: '700px', height: '400px', borderRadius: '20px', overflow: 'hidden' }}
            id="map"
          />
        </div>
      </div>
    </>
  )
}
