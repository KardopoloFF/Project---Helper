import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      {/* <Route path='/newtask' element={<CreateTaskPage />}/> */}

    </Routes>
    </>
  );
}

export default App;
