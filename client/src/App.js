import React from 'react';
import './App.css';
import Weight from './Pages/Weight'
import Feeding from './Pages/Feeding'
import { requirePropFactory } from '@material-ui/core';


function App(){
  
  return (
    <div className="App">
       <Feeding />
    </div>
  );
};


export default App;
