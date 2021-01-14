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
          <Navbar/>
        </Grid>
      
        <Switch>
<Route exact path={["/", "/weight"]}>
            <Weight />
          </Route>
          <Route exact path="/feeding">
            <Feeding />
          </Route>
          </Switch>
</Router>
    </div>
  );
};


export default App;
