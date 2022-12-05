import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OneTask from './OneTask'
import { ITask } from '../types/task'
import { fetchPosts } from '../redux//slices/postsSlice'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { Button, FormGroup, FormLabel } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import { Link } from 'react-router-dom'
import Map from './Map'

interface Istore {
  store: {}
  posts: Array<ITask>
}

export default function FindTask() {
  const tasks = useSelector((store: Istore) => store.posts)
  const dispatch = useDispatch();

  const [state, setState] = useState({
    frst: true,
    scnd: false,
    thrd: false,
    fourth: false,
    fifth: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const { frst, scnd, thrd, fourth, fifth } = state;

  useEffect(() => {
    dispatch(fetchPosts(state))
  }, [state])

  return (
    <div>
      <div>
        <FormLabel style={{ margin: '10px' }} component="legend"><h3>Выберите категорию</h3></FormLabel>
        <FormGroup >
          <FormControlLabel
            control={
              <Checkbox checked={frst} onChange={handleChange} name="frst" />
            }
            label="Бытовые услуги"
          />
          <FormControlLabel
            control={
              <Checkbox checked={scnd} onChange={handleChange} name="scnd" />
            }
            label="Грузоперевозки"
          />
          <FormControlLabel
            control={
              <Checkbox checked={thrd} onChange={handleChange} name="thrd" />
            }
            label="Курьерские услуги"
          />
          <FormControlLabel
            control={
              <Checkbox checked={fourth} onChange={handleChange} name="fourth" />
            }
            label="Компьютерная помощь"
          />
          <FormControlLabel
            control={
              <Checkbox checked={fifth} onChange={handleChange} name="fifth" />
            }
            label="Красота и здоровье"
          />
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {tasks.map((el) => <OneTask key={el.id} el={el} />)}
          </div>
        </FormGroup>
      </div>
      <br />
      <Map />
    </div>
  )
}
