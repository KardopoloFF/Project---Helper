import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ITask } from '../types/task';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { Container } from '@mui/system';

export interface ICategories {
  id: number;
  name: string;
}
export default function CreateTaskPage(){
 const [categories, setCategories] = React.useState<ICategories[]>([])
  const [category, setCategory] = React.useState<string>('');
  const [date, setDate] = React.useState<Dayjs | null>(null);

  React.useEffect(() => {
    axios('/categories')
    .then((res)=> setCategories(res.data))
  },[])

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const submitHandler =(e: React.FormEvent<HTMLFormElement>)=> {
    const { target, preventDefault } = e;
    preventDefault();
    axios.post('/newtask',{
    body: JSON.stringify(Object.fromEntries(new FormData(target as HTMLFormElement)))
    }
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
        <TextField name='price' type='number' id="standard-basic" variant="standard" />
        <Typography variant="h6" component="h6">
            Дата выполнения
        </Typography>
        <LocalizationProvider variant="standard" name='date' dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Дата"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
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
            name="Category"
            variant="standard"
            onChange={handleChange}
          >
          {categories.map((el)=> (
          <MenuItem key={el.id}  value={el.name}>{el.name}</MenuItem>
          )
          )}
          </Select>
        </FormControl>
        <Button  type="submit" variant="contained">Создать задание</Button>
  
    </form>
    </Container>
  );
}