import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Map from './components/Map';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Map />} />
      </Routes>
    </>
  );
}

export default App;
