/* eslint-disable react/prop-types */
import React from 'react'
import Grid from '@material-ui/core/Grid'
import KittenTable from '../Components/KittenTable'
import Chart from '../Components/Chart'
import ModalButton from '../Components/ModalButton'
import { NewWeightForm } from '../Components/Forms'
import 'fontsource-roboto'
import API from '../utils/API'

const recMins = [50, 60, 70, 80]
const recMaxs = [80, 90, 100, 110]

export default function Weight (props) {
  let [month, day, year] = new Date().toLocaleDateString('en-US').split('/')
  if (parseInt(month) < 10) {
    month = '0' + month
  };
  const today = year + '-' + month + '-' + day
  const [id, setId] = React.useState(props.kittenId)
  const [weights, setWeights] = React.useState([])
  const [date, setDate] = React.useState(today)
  const [weight, setWeight] = React.useState()

  React.useEffect(() => {
    loadKittens()
  }, [])

  // Loads all kittens
  function loadKittens () {
    API.getKitten(props.kittenId)
      .then(res => {
        console.log(res.data)
        setWeights(res.data.weights)
        setId(res.data._id)
      }
      )
      .catch(err => console.log(err))
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault()
    const numWeight = parseInt(weight)
    const newWeights = [...weights, { date: date, weight: numWeight }]
    setWeights(newWeights)
    API.updateKitten(
      {
        _id: id,
        weights: newWeights
      }
    ).then(res => { console.log(res.data) })
      .catch(err => console.log(err))
  }
  const handleDateChange = event => {
    const { value } = event.target
    setDate(value)
  }

  const handleWeightChange = event => {
    const { value } = event.target
    const numWeight = parseInt(value)
    setWeight(numWeight)
  }
  return (
      <div className="root">
          <Grid container spacing={3}>
              <Grid item xs={12}>
                  <Chart data={weights} recMins={recMins} recMaxs={recMaxs}/>
              </Grid>
              <Grid item xs={12}>
                  <ModalButton label="Enter New Weight" state={false} onClick= {handleFormSubmit}>
                      <NewWeightForm onDateChange={handleDateChange} onWeightChange={handleWeightChange}/>
                  </ModalButton>
              </Grid>
              <Grid item xs={12}>
                  <KittenTable data={weights} />
              </Grid>
          </Grid>
      </div>
  )
}
