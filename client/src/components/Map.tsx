// @ts-nocheck

import { Box } from '@mui/material'
import { ITask } from '../types/task'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNewTaskObject } from '../redux/slices/setNewTaskObjectSlice';

interface Istore {
  store: {}
  posts: Array<ITask>
  onePost: Array<ITask>
}

export default function Map() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [myMap, setMyMap] = useState(null);
  const task = useSelector((store: Istore) => store.onePost)
  const allPosts = useSelector((store: Istore) => store.posts)
  // Динамически изменяет выводимую точку на карте, в зависимости от координатов из DB
  // const [initPoint, setInitPoint] = useState(task.geo?.split(', ').map((el: string) => Number(el)) || '55.75, 37.62'.split(', ').map((el: string) => Number(el)))

  useEffect(() => {
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [55.7522, 37.6156],
        zoom: 12
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
    ymaps.ready(() => {
      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass( // Создаём макет содержимого.
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      );
      if (!Array.isArray(task)) {
        const myGeocoder = ymaps.geocode(task?.geo);
        myGeocoder.then(
          (res) => {
            const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            const myPlacemarkWithContent = new ymaps.Placemark(coordinates, {
              hintContent: 'Задание : ' + task.title,
              balloonContent: 'Адрес : ' + task.geo,
            }, {
              iconLayout: 'default#imageWithContent', // Необходимо указать данный тип макета.
              iconImageHref: 'https://cdn-icons-png.flaticon.com/512/5249/5249258.png', // заменяем иконку на другую
              iconImageSize: [40, 40], // Размеры метки.
              iconImageOffset: [-24, -24], // Смещение левого верхнего угла иконки относительно, её "ножки" (точки привязки).
              iconContentOffset: [15, 15], // Смещение слоя с содержимым относительно слоя с картинкой.
              iconContentLayout: MyIconContentLayout, // Макет содержимого.
            });
            myMap?.geoObjects
              .add(myPlacemarkWithContent);

          },
        );
      } else {
        allPosts?.forEach((el) => {
          const myGeocoder = ymaps.geocode(el.geo);
          myGeocoder.then(
            (res) => {
              const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
              const myPlacemarkWithContent = new ymaps.Placemark(coordinates, {
                hintContent: 'Задание : ' + el.title,
                balloonContent: 'Адрес : ' + el.geo,
              }, {
                iconLayout: 'default#imageWithContent', // Необходимо указать данный тип макета.
                iconImageHref: 'https://cdn-icons-png.flaticon.com/512/5249/5249258.png', // заменяем иконку на другую
                iconImageSize: [40, 40], // Размеры метки.
                iconImageOffset: [-24, -24], // Смещение левого верхнего угла иконки относительно, её "ножки" (точки привязки).
                iconContentOffset: [15, 15], // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentLayout: MyIconContentLayout, // Макет содержимого.
              });
              myMap?.geoObjects
                .add(myPlacemarkWithContent);
            })
        })
      }
    })
  }, [myMap, task, allPosts]);

  // !
  myMap?.events.add('click', function (e) {
    if (!myMap.balloon.isOpen()) {
      let coords = e.get('coords');
      dispatch(setNewTaskObject({ geo: coords }))
      myMap.balloon.open(coords, {
        contentHeader: 'По этому адресу будет выполнен заказ<br />',
        contentBody:
          'Координаты : <br />' + [
            coords[0].toPrecision(6),
            coords[1].toPrecision(6)
          ].join(', '),
        contentFooter: '<br /><button id="addAdress">Добавить адрес</button>',
      });

      setTimeout(() => {
        document.getElementById('addAdress')?.addEventListener('click', () => {
          navigate('/task/new');
        });
      }, 0)
    }
    else {
      myMap.balloon.close();
    }
  });

  return (
    <>
      <div style={{ marginTop: '40px' }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
        </Box>
        <div className="yandex">
          {/* <Button onClick={() => 
          dispatch(setDisplayedGeoObjects(allTasks.map((task: any) => 
          ({ geo: task.geo, title: task.title }))))} style={{ marginRight: '50px' }}>
          <PlaceIcon />
          Найти на карте
          </Button> */}
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
