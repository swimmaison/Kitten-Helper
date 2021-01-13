import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weight from './Pages/Weight'
import { requirePropFactory } from '@material-ui/core';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function App(){
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
 
      </header>
       <Weight />
    </div>
  );
};


export default App;
