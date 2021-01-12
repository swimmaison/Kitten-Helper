import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PoopSelect() {
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