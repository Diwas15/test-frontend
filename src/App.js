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
          <Route path='*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
