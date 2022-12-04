import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OneTask from './OneTask'
import {ITask} from '../types/task'
import {fetchPosts} from '../redux/postsSlice'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { FormGroup, FormLabel } from '@mui/material'

interface Istore {
store: {}
posts: Array<ITask>
}

export default function FindTask() {
    const tasks = useSelector((store:Istore)=> store.posts)
    const dispatch = useDispatch();
   
    const [state, setState] = useState({
        frst: true,
        scnd: false,
        thrd: false,
      });

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      const { frst, scnd, thrd } = state;
   
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
            label="frst category"
          />
          <FormControlLabel
            control={
              <Checkbox checked={scnd} onChange={handleChange} name="scnd" />
            }
            label="scnd category "
          />
          <FormControlLabel
            control={
              <Checkbox checked={thrd} onChange={handleChange} name="thrd" />
            }
            label="thrd category"
          />
        </FormGroup>
    </div>
    </div>
  )
}
