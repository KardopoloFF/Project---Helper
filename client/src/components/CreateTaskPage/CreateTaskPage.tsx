import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ITask } from '../../types/task';
import { ICategories } from '../../types/categories';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../types/users';
import { fetchCategories } from '../../redux/slices/categoriesSlice';
import { setNewTaskObject } from '../../redux/slices/setNewTaskObjectSlice';

interface Istore {
  store: {};
  categories: Array<ICategories>;
  newTaskObj: ITask;
  user: IUser // не уверен
}
export default function CreateTaskPage() {
  const categories = useSelector((store: Istore) => store.categories)
  const newTaskObj = useSelector((store: Istore) => store.newTaskObj)
  const dispatch = useDispatch();
  const user = useSelector((store: Istore) => store.user)
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
    dispatch(setNewTaskObject({ author: user.id }))
    dispatch(fetchCategories())
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    (dispatch(setNewTaskObject({ [event.target.name]: event.target.value })));
  };

  return (
    <Container style={{
      borderRadius: '20px', overflow: 'hidden', marginTop: '25px', display: 'flex', border: 'solid 2px black',
      justifyContent: 'start', flexDirection: 'column', backgroundColor: 'white', width: '400px', height: '460px'
    }}>
      <Typography variant="h5" component="div" style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
        Создать задание
      </Typography>
      <TextField id="outlined-multiline-flexible" value={newTaskObj.title} onChange={handleChange} label="1. Название" variant="standard" name='title' />
      <br />
      <TextField name='text' id="filled-basic" value={newTaskObj.text} onChange={handleChange} label="2. Описание" variant="standard" />
      <br />
      <TextField name='price' type='number' id="standard-basic" value={newTaskObj.price} onChange={handleChange} label="3. Оплата (RUB)" variant="standard" />
      <br />
      <LocalizationProvider variant="standard" dateAdapter={AdapterDayjs}>
        <br />
        <DatePicker
          label="Когда приступить к выполнению"
          inputFormat="DD-MM-YYYY"
          value={newTaskObj.date ?? new Date()}
          onChange={(newValue) => {
            dispatch(setNewTaskObject({ date: newValue }))
          }}
          renderInput={(params) => <TextField name='date' {...params} />}
        />
        <br />
      </LocalizationProvider>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={String(newTaskObj.categoryId ?? 'default0')}
          name="categoryId"
          variant="standard"
          onChange={handleChange}
        >
          <MenuItem key='default0' value='default0' disabled>Выберите категорию</MenuItem>
          {categories.map((el) => (
            <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>
          )
          )}
        </Select>
      </FormControl>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button style={{ marginTop: '15px', width: '100px' }} onClick={() => navigate('/task/newgeo')} variant="contained">Далее</Button>
      </div>
    </Container>
  );
}
