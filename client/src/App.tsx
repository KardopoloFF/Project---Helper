import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import FindTask from './components/FindTask/FindTask';
import Navbar from './components/Navbar';
import Reg from './components/Reg_Auth/Reg';
import Auth from './components/Reg_Auth/Auth';
import Home from './components/Home/Home';
import CreateTaskPage from './components/CreateTaskPage/CreateTaskPage';
import Map from './components/Map';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../src/components/Profile/Profile'
import OneTaskPage from './components/OneTaskPage';
import ProfileApplications from './components/Profile/ProfileApplications';
import ProfileInProgress from './components/Profile/ProfileInProgress';
import NewGeoCreatePage from './components/NewGeoCreatePage';
import WorkerProfile from './components/WorkerProfile';
import {checkAuth} from './redux/slices/userSlice'

function App() {
  const dispatch = useDispatch()
  const user = useSelector((store: any) => store.user)
  
  useEffect(() => {
    dispatch(checkAuth())
  },[])

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path='/user/reg' element={<Reg />} />
        <Route path='/work' element={<FindTask />} />
        <Route path='/user/auth' element={<Auth />} />
        <Route path='/task/find' element={<FindTask />} />
        <Route path='/user/profile' element={<Profile />} />
        <Route path='/task/info' element={<OneTaskPage />} />
        <Route path='/task/new' element={<CreateTaskPage />} />
        <Route path='/task/newgeo' element={<NewGeoCreatePage />} />
        <Route path='/task/worker/:id' element={<WorkerProfile />} />
        <Route path='/user/profile/inprogress' element={<ProfileInProgress />} />
        <Route path='/user/profile/applications' element={<ProfileApplications />} />
      </Routes>
    </Container>
  );
}

export default App;
