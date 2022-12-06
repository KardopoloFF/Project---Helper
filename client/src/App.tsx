import React, { Profiler } from 'react';
import { Route, Routes } from 'react-router-dom';
import FindTask from './components/FindTask';
import Navbar from './components/Navbar';
import Reg from './components/Reg_Auth/Reg';
import Auth from './components/Reg_Auth/Auth';
import Home from './components/Home/Home';
import CreateTaskPage from './components/CreateTaskPage';
// import PrivateRoute from './HOC/PrivateRoute';
import Map from './components/Map';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import Profile from '../src/components/Profile/Profile'
import OneTaskPage from './components/OneTaskPage';
import ProfileApplications from './components/Profile/ProfileApplications';
import ProfileInProgress from './components/Profile/ProfileInProgress';
import NewGeoCreatePage from './components/NewGeoCreatePage';
import WorkerProfile from './components/WorkerProfile';

function App() {
  const user = useSelector((store: any) => store.user)
  return (
    <Container>
      {/* {user 
      ? ( */}
    <Navbar />
    <Routes>
      <Route path='/work' element={<FindTask />} />
      <Route path='/user/reg' element={<Reg />} />
      <Route path='/user/auth' element={<Auth />} />
      <Route path='/user/profile' element={<Profile />}/>
      <Route path='/user/profile/applications' element={<ProfileApplications />}/>
      <Route path='/user/profile/inprogress' element={<ProfileInProgress />}/>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path='/task/find' element={<FindTask />} />
      <Route path='/task/new' element={<CreateTaskPage />}/>
      <Route path='/task/info' element={<OneTaskPage />}/>
      <Route path='/task/newgeo' element={<NewGeoCreatePage />}/>
      <Route path='/task/worker' element={<WorkerProfile />}/>
      {/* <Route path="/admin" element={(
            <PrivateRoute isAllowed={user?.email === 'Adam@mail.ru' && user?.name === 'Adam'}>
              <AdminPage />
            </PrivateRoute>
            )}/> */}
          </Routes>
        {/* ) : */}
        {/* <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>Подождите...</h3> */}
        {/* } */}
      </Container>
  );
}

export default App;
