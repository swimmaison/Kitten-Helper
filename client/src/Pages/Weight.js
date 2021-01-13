import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import KittenTable from '../Components/KittenTable';
import Chart from '../Components/Chart';
import ModalButton from '../Components/ModalButton'
import { NewWeightForm } from '../Components/Forms';
import Navbar from '../Components/Navbar';
import 'fontsource-roboto';


export default function Weight() {

  return (
    <div className="root">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className="paper">
              <Typography variant="h1">Kitten 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Chart />
        </Grid>
        <Grid item xs={12}>
          <ModalButton>
              <NewWeightForm />
          </ModalButton>
        </Grid>
        <Grid item xs={12}>
          <KittenTable />
        </Grid>
      </Grid>
    </div>
  );
}