/* eslint-disable react/prop-types */
import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import API from '../../utils/API'

export default function Title (props) {
  const [name, setName] = React.useState()
  React.useEffect(() => {
    loadKittens()
  }, [])

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

  return <Paper className="paper">
      <Typography variant="h1">{name}</Typography>
  </Paper>
}
