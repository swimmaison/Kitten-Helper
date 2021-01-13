import React from 'react';
import './App.css';

import Weight from './Pages/Weight'
import Feeding from './Pages/Feeding'
import { requirePropFactory } from '@material-ui/core';
import PhotoGallery from './Pages/PhotoGallery';
import AddKitten from './Components/AddKitten';
import Greet from './Components/Greet.js'
import KittenList from './Components/KittenList'

function App(){
  
  return (
    <div className="App">
     <Greet></Greet>
      <KittenList></KittenList>
    </div>
  );
};


export default App;
