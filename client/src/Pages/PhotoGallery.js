



////
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function PhotoGallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Photo Gallery</h1>
      
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>

          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>

          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>     
               <img src="https://bulma.io/images/placeholders/128x128.png"></img>
          </Paper>

        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>

          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>

          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}