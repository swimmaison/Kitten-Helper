import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Weight from './Pages/Weight'
import Feeding from './Pages/Feeding'
import { requirePropFactory } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Navbar from './Components/Navbar';
import 'fontsource-roboto';
import logo from './logo.svg';

import PhotoGallery from './Pages/PhotoGallery';
import AddKitten from './Components/AddKitten';
import Greet from './Components/Greet.js'
import KittenList from './Components/KittenList'


function App(){
  
  return (
    <div className="App">
      <Router>
       <Grid item xs={3}>
        <img src={logo} className="App-logo" alt="logo" />
        </Grid>
        <Grid item xs={9}>
          <Paper className="paper">
              <Typography variant="h1">Kitten 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Navbar currPage="0"/>
        </Grid>
      
        <Switch>
<Route exact path="/weight">
            <Weight />
          </Route>
          <Route exact path="/feeding">
            <Feeding />
          </Route>
          <Route exact path="/photo">
            <PhotoGallery />
          </Route>
    <Route exact path="/">
    <Greet></Greet>
      <KittenList><AddKitten /></KittenList>
    </Route>
          </Switch>
</Router>
     

    </div>
  );
};


export default App;
