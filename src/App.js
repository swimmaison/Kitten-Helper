import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import AddKitten from './Components/AddKitten';
import KittenList from './Components/KittenList';

class App extends Component {
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          <Greet></Greet>
          <AddKitten></AddKitten>
          <KittenList
          name = "fluffy"
          dob = "12"
          
          ></KittenList>
        </p>
 
      </header>
    </div>
  );
};
}

export default App;
