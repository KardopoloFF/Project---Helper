import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FindTask from './components/FindTask';
import CreateTaskPage from './components/CreateTaskPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/task/new' element={<CreateTaskPage />}/>
      <Route path='/work' element={<FindTask />} />
    </Routes>
    </>
  );
}

export default App;
