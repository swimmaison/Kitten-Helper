import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import KittenTable from '../Components/KittenTable';
import Chart from '../Components/Chart';
import ModalButton from '../Components/ModalButton'
import { NewFeedingForm } from '../Components/Forms';
import 'fontsource-roboto';
import API from '../utils/API';






export default function Feeding(props) {      
  let [month, day, year]    = new Date().toLocaleDateString("en-US").split("/")
  if (parseInt(month)<10) {
    month = "0"+ month;
  };
  let today = year + "-" + month + "-" + day
  const [feedings, setFeedings] = React.useState([]);
    const [date, setDate] = React.useState(today)
    const [poop, setPoop] = React.useState()
    const [amount, setAmount] = React.useState()
    const [id, setId] = React.useState()

  React.useEffect(() => {
    loadKittens()
  }, [])

  // Loads all kittens 
  function loadKittens() {
    API.getKitten(props.kittenId)
      .then(res => 
        {console.log(res.data)
        setFeedings(res.data.feedings)
        setId(res.data._id)
        }
      )
      .catch(err => console.log(err));
      
  };



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
        const newFeedings = [...feedings,{date: date, amount: numAmount, quality: poop}];
        setFeedings(newFeedings)
        API.updateKitten(
          {_id: id,
          feedings: newFeedings}
        ).then(res => 
          {console.log(res.data)})
          .catch(err => console.log(err));
      };
  return (
    <div className="root">
      <Grid container spacing={3}>
       
        <Grid item xs={12}>
          <Chart data={feedings}/>
        </Grid>
        <Grid item xs={12}>
          <ModalButton label="Enter New Feeding" state={false} onClick= {handleFormSubmit}>
              <NewFeedingForm onPoopChange={handlePoopChange} onDateChange={handleDateChange} onAmountChange={handleAmountChange}/>
              
          </ModalButton>
        </Grid>
        <Grid item xs={12}>
          <KittenTable data={feedings} />
        </Grid>
      </Grid>
    </div>
  );
}