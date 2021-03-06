/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { PoopSelect, DateSelector } from '../Inputs'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  container: {
    flexWrap: 'wrap',
    maxWidth: '35ch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing(1),
    height: 30
  }
}))

export function NewWeightForm (props) {
  const classes = useStyles()
  return <form className={classes.container} noValidate>
      <DateSelector label ="Date" onChange={props.onDateChange}/>
      <TextField
           label="Weight"
           id="weight-entry-field"
           type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>
          }}
          onChange={props.onWeightChange}
        />
  </form>
}
export function NewFeedingForm (props) {
  const classes = useStyles()
  return <form className={classes.container} noValidate>
      <DateSelector label="Date" onChange={props.onDateChange}/>
      <TextField
          label="Volume fed"
          id="volume-entry-field"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">ml</InputAdornment>
          }}
          onChange={props.onAmountChange}
        />
      <PoopSelect onChange={props.onPoopChange}/>
  </form>
}

export function Input (props) {
  return (
      <div className="form-group">
          <input className="form-control" {...props} />
      </div>
  )
}

export function FormBtn (props) {
  return (
      <Button {...props} variant="outlined" style={{ float: 'right', marginBottom: 10 }} color="secondary">
          {props.children}
      </Button>
  )
}
