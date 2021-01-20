import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { PoopSelect, DateSelector }  from '../Inputs';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },  
  container: {
    flexWrap: 'wrap',
    maxWidth:500,
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing(1),
    height:30,
  },
}));

export function NewKittenForm(){
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return <form>
    <FormControl className={classes.formControl}>
      <TextField id="standard-required" label="Required" defaultValue="Hello World" />
      <TextField id="standard-required" label="Required" defaultValue="Hello World" />
      <DateSelector />
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
    </FormControl>
  </form>
}
export function NewWeightForm(props){
  const classes = useStyles();
  return  <form className={classes.container} noValidate>
    <DateSelector onChange={props.onDateChange}/>
    <TextField
           label="Weight"
           id="weight-entry-field"
           type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>,
          }}
          onChange={props.onWeightChange}
        />
  </form>
}
export function NewFeedingForm(props){
  const classes = useStyles();
  return <form className={classes.container} noValidate>
    <DateSelector onChange={props.onDateChange}/>
    <TextField
          label="Volume fed"
          id="volume-entry-field"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">ml</InputAdornment>,
          }}
          onChange={props.onAmountChange}
        />
        <PoopSelect onChange={props.onPoopChange}/>
  </form>
}
export function NotificationForm(){}