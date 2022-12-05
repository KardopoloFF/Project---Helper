import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OneTask from './OneTask'
import {ITask} from '../types/task'
import { ICategories } from '../types/categories';
import {fetchPosts} from '../redux/postsSlice'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormGroup, FormLabel } from '@mui/material'
import { fetchCategories } from '../redux/categoriesSlice';

interface Istore {
store: {}
posts: Array<ITask>
categories: Array<ICategories>
}

export default function FindTask() {
    const tasks = useSelector((store:Istore)=> store.posts)
    const categories = useSelector((store:Istore)=>store.categories)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCategories())
      console.log(categories);
      
    },[])
   
    const [state, setState] = useState({
        frst: true,
        scnd: false,
        thrd: false,
        four: false,
        five: false,
      });

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      const { frst, scnd, thrd, four, five } = state;
   
    useEffect(()=>{
        dispatch(fetchPosts(state))
    },[state])
  return (
    <div>
    <div>
       {tasks.map((el) => <OneTask key={el.id} el={el}/>)} 
    </div>
    <div>
    <FormLabel component="legend">Chose category</FormLabel>
        <FormGroup>
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
        </FormGroup>
    </div>
    </div>
  )
}
