import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ITask } from '../types/task';
import { ICategories } from '../types/categories';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categoriesSlice';
import { fetchNewTaskObject, setNewTaskObject } from '../redux/setNewTaskObjectSlice';
import { useNavigate } from 'react-router-dom';



interface Istore {
store: {};
categories: Array<ICategories>;
newTaskObj: ITask ; // не уверен
}
export default function CreateTaskPage(){
  const categories = useSelector((store:Istore)=>store.categories)
  const newTaskObj = useSelector((store:Istore)=> store.newTaskObj)
  const dispatch = useDispatch();
  const [category, setCategory] = React.useState<string>('');
  const navigate = useNavigate();
  // const [input, setInput] = React.useState<ITask>({ 
  //   title:'',
  //   text:'',
  //   price: 0,
  //   date: new Date(),
  //   categoryId: 1,
  //   author: 1,
  //   worker: null,
  // })

  React.useEffect(() => {
    dispatch(fetchCategories())
    console.log(categories);
    
  },[])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    (dispatch(setNewTaskObject({[event.target.name]: event.target.value })));
  };





  // const submitHandler =(e: React.FormEvent<HTMLFormElement>)=> {
  //   e.preventDefault();
  //   axios.post('http://localhost:3001/newtask', newTaskObj)
  // }

  return (
    <Container>
    <form>
   {/* onSubmit={submitHandler}> */}
      <Typography variant="h6" component="h6">
          Заголовок
      </Typography>
      <TextField id="outlined-multiline-flexible" value={newTaskObj.title} onChange={handleChange} label="Multiline" variant="standard" name='title' />
        <Typography variant="h6" component="h6">
            Подробнее
        </Typography>
        <TextField name='text' id="filled-basic"  value={newTaskObj.text} onChange={handleChange} label="Filled" variant="standard" />
        <Typography variant="h6" component="h6">
            Цена вопроса
        </Typography>
        <TextField name='price' type='number' id="standard-basic"  value={newTaskObj.price} onChange={handleChange} label="В рублях, пожалуйста"variant="standard" />
        <Typography variant="h6" component="h6">
            Дата выполнения
        </Typography>
        <LocalizationProvider variant="standard"  dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Дата"
                value={newTaskObj.date ?? new Date()}
                onChange={(newValue) => {
                  dispatch(setNewTaskObject({date: newValue}))
                }}
                renderInput={(params) => <TextField name='date' {...params} />}
              />
            </LocalizationProvider>
        <Typography variant="h6" component="h6">
            Категория задания
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label" variant="standard" >Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={String(newTaskObj.categoryId ?? 'default0')}
            name="categoryId"
            variant="standard"
            onChange={handleChange}
          >
            <MenuItem key='default0' value='default0' disabled>Выберите</MenuItem>
          {categories.map((el)=> (
          <MenuItem key={el.id}  value={el.id}>{el.name}</MenuItem>
          )
          )}
          </Select>
        </FormControl>
        <Button  onClick={() => navigate('/task/newgeo') } variant="contained">Выбрать локацию</Button>
  
    </form>
    </Container>
  );
}