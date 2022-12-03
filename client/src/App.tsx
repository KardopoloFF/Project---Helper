import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FindTask from './components/FindTask';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateTaskPage from './components/CreateTaskPage';
import PrivateRoute from './HOC/PrivateRoute';
// import AdminPage from './components/AdminPage';
import Map from './components/Map';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((store) => store.user)
  return (
    <Container>
      {/* {user 
      ? ( */}
      <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path='/task/find' element={<FindTask />} />
      <Route path='/task/new' element={<CreateTaskPage />}/>
      {/* <Route path="/admin" element={(
            <PrivateRoute isAllowed={user?.email === 'Adam@mail.ru' && user?.name === 'Adam'}>
              <AdminPage />
            </PrivateRoute>
            )}/> */}
    </Routes>
    </> 
    {/* ) : */}
    {/* <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>Подождите...</h3> */}
    {/* } */}
    </Container>
  );
}

export default App;
