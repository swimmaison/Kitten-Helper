import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import { DateSelector } from './Inputs'
import Radio from '@material-ui/core/Radio'

export default function newKittenFormn (props) {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
      <form onSubmit={handleSubmit}>
          <Grid container alignItems="center" justify="center" direction="column">
              <Grid item>
                  <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={props.values.name}
            onChange={props.onChange}
          />
              </Grid>
              <Grid item>
                  <TextField
            id="description-input"
            name="description"
            label="Description"
            type="text"
            value={props.values.description}
            onChange={props.onChange}
          />
              </Grid>
              <br />
              <Grid item>
                  <FormControl>
                      <FormLabel>Gender</FormLabel>
                      <RadioGroup
              name="gender"
              value={props.values.gender}
              onChange={props.onChange}
              row
            >
                          <FormControlLabel
                key="male"
                value="male"
                control={<Radio size="small" />}
                label="Male"
              />
                          <FormControlLabel
                key="female"
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />
                      </RadioGroup>
                  </FormControl>
              </Grid>

              <Grid item>
                  <DateSelector
            id="birthdate"
            name="birthdate"
            label="Birth Date"
            type="date"
            defaultValue={props.values.birthdate}
            onChange={props.onChange}
          />
              </Grid>

          </Grid>
      </form>
  )
}
