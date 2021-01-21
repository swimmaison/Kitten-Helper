/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}))

export function PoopSelect (props) {
  const classes = useStyles()
  const [poop, setPoop] = React.useState('')

  const handleChange = (event) => {
    setPoop(event.target.value)
    props.onChange(event)
  }

  return (
      <div>
          <FormControl className={classes.formControl}>
              <InputLabel id="poop-quality-label">
                  Poop Quality
              </InputLabel>
              <Select
                labelId="poop-quality-label"
                id="poop-quality-selector"
                value={poop}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
        >
                  <MenuItem value={'Normal'}>Normal</MenuItem>
                  <MenuItem value={'Green'}>More green than normal</MenuItem>
                  <MenuItem value={'Liquid'}>More liquid than normal</MenuItem>
                  <MenuItem value={'Hard'}>Harder than normal</MenuItem>
              </Select>
              <FormHelperText>Mark any changes in the kitten&apos;s bowel movement</FormHelperText>
          </FormControl>
      </div>
  )
}

export function DateSelector (props) {
  const classes = useStyles()
  let [month, day, year] = new Date().toLocaleDateString('en-US').split('/')
  if (parseInt(month) < 10) {
    month = '0' + month
  };
  const today = year + '-' + month + '-' + day

  const [date, setDate] = React.useState(today)

  const handleChange = (event) => {
    setDate(event.target.value)
    props.onChange(event)
  }

  return (

      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue= {date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        onChange={handleChange}
      />
  )
}
