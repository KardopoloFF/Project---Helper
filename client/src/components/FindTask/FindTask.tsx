// @ts-nocheck

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OneTask from '../OneTask'
import { ITask } from '../../types/task'
import { ICategories } from '../../types/categories';
import { fetchPosts } from '../../redux/slices/postsSlice'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, CardContent, FormGroup, FormLabel, Paper, Typography } from '@mui/material'
import { fetchCategories } from '../../redux/slices/categoriesSlice';
import Map from '../Map';
import './FindTask.css'

interface Istore {
  store: {}
  posts: Array<ITask>
  categories: Array<ICategories>
}

export default function FindTask() {
  const tasks = useSelector((store: Istore) => store.posts)
  const categories = useSelector((store: Istore) => store.categories)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const [state, setState] = useState({
    frst: true,
    scnd: true,
    thrd: true,
    four: true,
    five: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const { frst, scnd, thrd, four, five } = state;

  useEffect(() => {
    dispatch(fetchPosts(state))
  }, [state])
  return (
    
    <>
      <FormLabel className="findTask" component="legend">
        <Typography className="findTask" variant="h5" component="div">
          Найти задание
        </Typography>
      </FormLabel>
      <div className="categoriesPlusMap">
        <div className='categoriesForeignStyle'>
          <div className="categoriesInFindTask">
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
                <Checkbox checked={four} onChange={handleChange} name="four" />
              }
              label="Компьютерная помощь"
            />
            <FormControlLabel
              control={
                <Checkbox checked={five} onChange={handleChange} name="five" />
              }
              label="Красота и здоровье"
            />
          </div>
        </div>
        <Map />
      </div>
      <br />
      <Typography variant="h5" component="div" className="titleOfTasks">
        Список заданий
      </Typography>
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap'}}> 
        {tasks.map((el) => el.status === 'Ждет исполнителя' ? <CardContent key={el.id}>
        <Paper>
          
          <OneTask el={el} /> 
          </Paper>
        </CardContent> : null)}
      </div>
    </>
  )
}
