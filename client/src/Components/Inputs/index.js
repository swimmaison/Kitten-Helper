import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export function PoopSelect() {
  const classes = useStyles();
  const [poop, setPoop] = React.useState('');

  const handleChange = (event) => {
    setPoop(event.target.value);
  };

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
          <MenuItem value="">
            <em>Normal</em>
          </MenuItem>
          <MenuItem value={'green'}>More green than normal</MenuItem>
          <MenuItem value={'liquid'}>More liquid than normal</MenuItem>
          <MenuItem value={'hard'}>Harder than normal</MenuItem>
        </Select>
        <FormHelperText>Mark any changes in the kitten's bowel movement</FormHelperText>
      </FormControl>
    </div>
  );
}


export  function DateSelector() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}