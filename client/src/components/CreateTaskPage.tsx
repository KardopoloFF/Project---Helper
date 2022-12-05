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



interface Istore {
store: {}
categories: Array<ICategories>
}
export default function CreateTaskPage(){
  const categories = useSelector((store:Istore)=>store.categories)
  const dispatch = useDispatch();
  const [category, setCategory] = React.useState<string>('');
  const [date, setDate] = React.useState<Date | null>(null);

  React.useEffect(() => {
    dispatch(fetchCategories())
    console.log(categories);
    
  },[])

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };


  const submitHandler =(e: React.FormEvent<HTMLFormElement>)=> {
    const { target, preventDefault } = e;
    e.preventDefault();
    axios.post('http://localhost:3001/newtask',  
      Object.fromEntries(new FormData(target as HTMLFormElement))
    )
  }

  return (
    <Container>
    <form 
    onSubmit={submitHandler}>
      <Typography variant="h6" component="h6">
          Заголовок
      </Typography>
      <TextField id="outlined-multiline-flexible" label="Multiline" variant="standard" name='title' />
        <Typography variant="h6" component="h6">
            Подробнее
        </Typography>
        <TextField name='text' id="filled-basic" label="Filled" variant="standard" />
        <Typography variant="h6" component="h6">
            Цена вопроса
        </Typography>
        <TextField name='price' type='number' id="standard-basic" label="В рублях, пожалуйста"variant="standard" />
        <Typography variant="h6" component="h6">
            Дата выполнения
        </Typography>
        <LocalizationProvider variant="standard"  dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Дата"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
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
            value={category}
            name="categoryId"
            variant="standard"
            onChange={handleChange}
          >
          {categories.map((el)=> (
          <MenuItem key={el.id}  value={el.id}>{el.name}</MenuItem>
          )
          )}
          </Select>
        </FormControl>
        <Button  type="submit" variant="contained">Создать задание</Button>
  
    </form>
    </Container>
  );
}