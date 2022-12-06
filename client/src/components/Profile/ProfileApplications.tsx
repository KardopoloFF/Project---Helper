import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OneTask from './../OneTask'
import {ITask} from '../../types/task'
import { ICategories } from '../../types/categories';
import {fetchPosts} from '../../redux/slices/postsSlice'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormGroup, FormLabel } from '@mui/material'
import { fetchCategories } from '../../redux/slices/categoriesSlice';

interface Istore {
  store: {}
  posts: Array<ITask>
  }

export default function ProfileApplications() {
  const tasks = useSelector((store:Istore)=> store.posts)
  const categories = useSelector((store:Istore)=>store.categories)
  const dispatch = useDispatch();
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {tasks.map((el) => <OneTask key={el.id} el={el} />)}
    </div>
  )
}