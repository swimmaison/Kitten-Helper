import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import KittenList from './Components/KittenList';
import PhotoGallery from './Components/PhotoGallery';
import AddKitten from './Components/AddKitten'

class App extends Component {
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          <Greet></Greet>
          <KittenList></KittenList>
          <AddKitten></AddKitten>
          <PhotoGallery></PhotoGallery>
        </p>
 
      </header>
    </div>
  );
};
}

export default App;
