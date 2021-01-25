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
  const [poop, setPoop] = React.useState({ poopColor: 'Normal', poopTexture: 'Normal' })

  const handleChange = (event) => {
    console.log(event)
    setPoop({ ...poop, [event.target.name]: event.target.value })
    props.onChange(event)
  }

  return (
      <div className={classes.container}>
          <FormControl className={classes.formControl}>
              <InputLabel id="poop-color-label">
                  Color
              </InputLabel>
              <Select
                labelId="poop-color-label"
                id="poop-color-selector"
                value={poop.poopColor}
                name="poopColor"
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
        >
                  <MenuItem value={'Normal'}>Normal</MenuItem>
                  <MenuItem value={'Green'}>Green</MenuItem>
                  <MenuItem value={'Yellow'}>Yellow</MenuItem>
                  <MenuItem value={'Beige'}>Beige</MenuItem>
                  <MenuItem value={'Black'}>Black</MenuItem>
                  <MenuItem value={'Red'}>Red</MenuItem>
              </Select>
              <FormHelperText>Mark any changes in the kitten&apos;s bowel movement</FormHelperText>
              <FormControl className={classes.formControl}>
                  <InputLabel id="poop-texture-label">
                      Texture
                  </InputLabel>
                  <Select
                labelId="poop-texture-label"
                id="poop-texture-selector"
                value={poop.poopTexture}
                name="poopTexture"
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
        >
                      <MenuItem value={'Normal'}>Normal</MenuItem>
                      <MenuItem value={'Mucousy'}>Mucousy</MenuItem>
                      <MenuItem value={'Curdled'}>Curdled</MenuItem>
                      <MenuItem value={'Liquid'}>Liquid</MenuItem>
                      <MenuItem value={'Soft'}>Soft</MenuItem>
                      <MenuItem value={'Hard'}>Hard</MenuItem>

                  </Select>
                  <FormHelperText>Mark any changes in the kitten&apos;s bowel movement</FormHelperText>
              </FormControl>

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

  const [date, setDate] = React.useState(props.defaultValue || today)

  const handleChange = (event) => {
    setDate(event.target.value)
    props.onChange(event)
  }

  return (

      <TextField
        id="date"
        label={props.label}
        type="date"
        name={props.name}
        defaultValue= {date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        onChange={handleChange}
      />
  )
}
