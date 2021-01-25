import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import ImgurEmbed from '../Components/ImgurEmbed'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

export default function PhotoGallery () {
  const classes = useStyles()

  return (
      <div className={classes.root}>
          <h1>Photo Gallery</h1>

          <Grid container spacing={3}>
              <Grid item xs>
                  <Paper className={classes.paper}>
                      <ImgurEmbed data_id="Qa1a2ef" src="http://imgur.com/Qa1a2ef"/>
                  </Paper>
              </Grid>
              <Grid item xs>
                  <Paper className={classes.paper}>
                      <ImgurEmbed data_id="KWvtdg0" src="http://imgur.com/KWvtdg0" />
                  </Paper>
              </Grid>
              <Grid item xs>
                  <Paper className={classes.paper}>
                      <ImgurEmbed data_id="sRLWmUh" src="http://imgur.com/sRLWmUh" />               </Paper>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
              <Grid item xs>
                  <Paper className={classes.paper}>
                      <ImgurEmbed data_id="uq7Ssi0" src="http://imgur.com/uq7Ssi0" />                  </Paper>
              </Grid>
          </Grid>
      </div>
  )
}
