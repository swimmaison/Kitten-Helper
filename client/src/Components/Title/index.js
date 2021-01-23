/* eslint-disable react/prop-types */
import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default function Title (props) {
  return <Paper className="paper">
      <Typography variant="h1">{props.text}</Typography>
  </Paper>
}
