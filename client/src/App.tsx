import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FindTask from './components/FindTask';
import Navbar from './components/Navbar';
import Reg from './components/Reg_Auth/Reg';
import Auth from './components/Reg_Auth/Auth';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      {/* <Route path='/newtask' element={<CreateTaskPage />}/> */}
      <Route path='/work' element={<FindTask />} />
      <Route path='/reg' element={<Reg />} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
    </>
  );
}

export default App;
