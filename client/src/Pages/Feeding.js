import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import KittenTable from '../Components/KittenTable';
import Chart from '../Components/chart';
import ModalButton from '../Components/ModalButton'
import { NewFeedingForm } from '../Components/Forms';
import Navbar from '../Components/Navbar';
import 'fontsource-roboto';
import logo from '../logo.svg';


const testingFeeding = [];
const recMins = [50,60,70,80];
const recMaxs = [80,90,100,110];



export default function Feeding() {
    const [feedings, setFeedings] = React.useState(testingFeeding);
    const [date, setDate] = React.useState()
    const [poop, setPoop] = React.useState()
    const [amount, setAmount] = React.useState()

    const handleDateChange = event => {
        const { value } = event.target;
        setDate(value);
      };
      const handlePoopChange = event => {
        const { value } = event.target;
        setPoop(value);
    };
    const handleAmountChange = event => {
        const { value } = event.target;
        setAmount(value);
    };
      const handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        let numAmount=parseInt(amount)
        setFeedings(testingFeeding.push({date: date, amount: numAmount, poop: poop}))
        console.log(testingFeeding)
      };
  return (
    <div className="root">
      <Grid container spacing={3}>
       
        <Grid item xs={12}>
          <Chart data={testingFeeding} recMins={recMins} recMaxs={recMaxs}/>
        </Grid>
        <Grid item xs={12}>
          <ModalButton label="Enter New Feeding" state={false} onClick= {handleFormSubmit}>
              <NewFeedingForm onPoopChange={handlePoopChange} onDateChange={handleDateChange} onAmountChange={handleAmountChange}/>
              
          </ModalButton>
        </Grid>
        <Grid item xs={12}>
          <KittenTable data={testingFeeding} />
        </Grid>
      </Grid>
    </div>
  );
}