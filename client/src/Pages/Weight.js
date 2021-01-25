/* eslint-disable react/prop-types */
import React from 'react'
import Grid from '@material-ui/core/Grid'
import KittenTable from '../Components/KittenTable'
import Chart from '../Components/Chart'
import ModalButton from '../Components/ModalButton'
import { NewWeightForm } from '../Components/Forms'
import 'fontsource-roboto'
import API from '../utils/API'

let recMins = []
let recMaxs = []

export default function Weight (props) {
  let [month, day, year] = new Date().toLocaleDateString('en-US').split('/')
  if (parseInt(month) < 10) {
    month = '0' + month
  };
  const today = year + '-' + month + '-' + day
  const [id, setId] = React.useState(props.kittenId)
  const [weights, setWeights] = React.useState([])
  const [date, setDate] = React.useState(today)
  const [weight, setWeight] = React.useState([])
  const [modal, setModal] = React.useState(false)
  const [birthdate, setBirthdate] = React.useState()

  React.useEffect(() => {
    loadKittens()
  }, [])
  React.useEffect(() => {
    recMins = []
    recMaxs = []
    calcAges()
  }, [weights])

  // Loads all kittens
  function loadKittens () {
    API.getKitten(props.kittenId)
      .then(res => {
        console.log(res.data)
        setBirthdate(res.data.birthdate)
        setWeights(res.data.weights)
        setId(res.data._id)
        calcAges()
      }

      )
      .catch(err => console.log(err))
  };

  function calcAges () {
    if (weights !== undefined) {
      weights.forEach(element => {
        const day = Date.parse(element.date)
        const birth = Date.parse(birthdate)
        const age = (Math.floor((day - birth) / (7 * 24 * 60 * 60 * 1000)))
        if (age === 0) {
          recMins.push(50)
          recMaxs.push(150)
        } else if (age === 1) {
          recMins.push(150)
          recMaxs.push(250)
        } else if (age === 2) {
          recMins.push(250)
          recMaxs.push(350)
        } else if (age === 3) {
          recMins.push(350)
          recMaxs.push(450)
        } else if (age === 4) {
          recMins.push(450)
          recMaxs.push(550)
        } else if (age === 5) {
          recMins.push(550)
          recMaxs.push(850)
        }
        setWeight(recMins + recMaxs)
      })
    }
  }
  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault()
    const numWeight = parseInt(weight)
    let newWeights
    if (weights !== undefined) {
      newWeights = [...weights, { date: date, weight: numWeight }]
    } else {
      newWeights = [{ date: date, weight: numWeight }]
    }
    calcAges()
    setWeights(newWeights)
    API.updateKitten(
      {
        _id: id,
        weights: newWeights
      }
    ).then(res => {
      console.log(res.data)
    })
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
  const parentClose = () => {
    setModal(false)
  }
  const parentOpen = () => {
    setModal(true)
  }

  return (
      <div className="root">
          <Grid container spacing={3}>
              <Grid item xs={12}>
                  <Chart data={weights} recMins={recMins} recMaxs={recMaxs}/>
              </Grid>
              <Grid item xs={12}>
                  <ModalButton label="Enter New Weight" toClose ={parentClose} toOpen ={parentOpen} state={modal} onClick= {handleFormSubmit}>
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
