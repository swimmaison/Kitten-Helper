import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weight from './Pages/Weight'

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
