import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FindTask from './components/FindTask';
import Navbar from './components/Navbar';
import Map from './components/Map';
import CreateTaskPage from './components/CreateTaskPage';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/newtask' element={<CreateTaskPage />}/>
      <Route path="/" element={<Map />} />
      <Route path='/work' element={<FindTask />} />
    </Routes>
    </>
  );
}

export default App;
