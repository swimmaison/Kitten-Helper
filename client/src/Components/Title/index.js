/* eslint-disable react/prop-types */
import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import API from '../../utils/API'
import logo from '../../logo.svg'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import LogoutBtn from '../LogoutBtn'

const useStyles = makeStyles((theme) => ({
  img: {
    width: '35%'
  }
}))

export default function Title (props) {
  const [name, setName] = React.useState()
  React.useEffect(() => {
    loadKittens()
  }, [])
  const classes = useStyles()
  // Loads all kittens
  function loadKittens () {
    API.getKitten(props.kittenId)
      .then(res => {
        console.log(res.data)
        setName(res.data.name)
      }

      )
      .catch(err => console.log(err))
  };

  return <Paper variant="outlined" className="paper">
      <Grid container>
          <Grid item xs={3}>
              <a href="/">
                  <img src={logo} className={classes.img} alt="Kitten Helper Logo" />
              </a>
          </Grid>
          <Grid item xs={5}>
              <Typography variant="h1">{name}</Typography>
          </Grid>
          <Grid item xs={1}>
              <LogoutBtn />
          </Grid>
      </Grid>
  </Paper>
}
