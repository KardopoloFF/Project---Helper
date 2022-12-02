import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateTaskPage from './components/CreateTaskPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/task/new' element={<CreateTaskPage />}/>

    </Routes>
    </>
  );
}

export default App;
