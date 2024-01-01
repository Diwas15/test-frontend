import './App.css';
import React from 'react';


import HomePage from './HomePage';
import SignIn from './SignIn';
import NoPage from './NoPage';

import {BrowserRouter,Routes,Route,} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route index element={<SignIn/>}/>
          <Route path='/HomePage' element={<HomePage/>}/>
          <Route index element={<HomePage/>}/>
          <Route path='*' element={<Navigate to="/" replace />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
