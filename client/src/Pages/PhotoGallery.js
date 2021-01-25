import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

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
                      <blockquote className="imgur-embed-pub" lang="en" data-id="Qa1a2ef"><a href="//imgur.com/Qa1a2ef">Found a kitten</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
                  </Paper>
              </Grid>
              <Grid item xs>
                  <Paper className={classes.paper}>
                      <blockquote className="imgur-embed-pub" lang="en" data-id="KWvtdg0"><a href="//imgur.com/KWvtdg0">&quot;As Gentle as a Cat Touching a Cherry&quot;</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
                  </Paper>
              </Grid>
              <Grid item xs>
                  <Paper className={classes.paper}>
                      <blockquote className="imgur-embed-pub" lang="en" data-id="sRLWmUh"><a href="//imgur.com/sRLWmUh">Mistakes were made</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>                  </Paper>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
              <Grid item xs>
                  <Paper className={classes.paper}>
                      <blockquote className="imgur-embed-pub" lang="en" data-id="uq7Ssi0"><a href="//imgur.com/uq7Ssi0">60fps Kitten Cuddle</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>                  </Paper>
              </Grid>
          </Grid>
      </div>
  )
}
