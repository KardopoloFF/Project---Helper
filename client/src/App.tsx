import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {ITask} from '../src/types/task'
import CreateTaskPage from './components/CreateTaskPage';

function App(){
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


// const App =()=> {
//   return 
//   <CreateTaskPage />
// }
// export {App}