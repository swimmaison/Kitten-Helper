/* eslint-disable react/prop-types */
import React from 'react'
import Grid from '@material-ui/core/Grid'
import KittenTable from '../Components/KittenTable'
import Chart from '../Components/Chart'
import ModalButton from '../Components/ModalButton'
import { NewFeedingForm } from '../Components/Forms'
import 'fontsource-roboto'
import API from '../utils/API'
import Notification from '../Components/Notification'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

export default function Feeding (props) {
  let [month, day, year] = new Date().toLocaleDateString('en-US').split('/')
  if (parseInt(month) < 10) {
    month = '0' + month
  };
  const today = year + '-' + month + '-' + day
  const [feedings, setFeedings] = React.useState([])
  const [date, setDate] = React.useState(today)
  const [poop, setPoop] = React.useState({ poopColor: 'Normal', poopTexture: 'Normal' })
  const [amount, setAmount] = React.useState()
  const [id, setId] = React.useState(props.kittenId)
  const [modal, setModal] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [alert, setAlert] = React.useState({ trigger: '', diagnosis: '' })

  React.useEffect(() => {
    loadKittens()
  }, [])

  // Loads all kittens
  function loadKittens () {
    API.getKitten(props.kittenId)
      .then(res => {
        console.log(res.data)
        setFeedings(res.data.feedings)
        setId(res.data._id)
      }
      )
      .catch(err => console.log(err))
  };

  const handleDateChange = event => {
    const { value } = event.target
    setDate(value)
  }
  const handlePoopChange = event => {
    const { name, value } = event.target
    setPoop({ ...poop, [name]: value })
  }
  const handleAmountChange = event => {
    const { value } = event.target
    setAmount(value)
  }
  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault()
    const numAmount = parseInt(amount)
    let newFeedings
    if (feedings !== undefined) {
      newFeedings = [...feedings, { date: date, amount: numAmount, quality: poop.poopTexture, color: poop.poopColor }]
    } else {
      newFeedings = [{ date: date, amount: numAmount, quality: poop.poopTexture, color: poop.poopColor }]
    }
    if (poop.poopColor === 'Green') {
      setAlert({ trigger: 'Green', diagnosis: 'of a bacterial infection. If this persists, please see a veterinarian.' })
      setOpen(true)
    } else if (poop.poopColor === 'Beige') {
      setAlert({ trigger: 'Beige', diagnosis: 'that a kitten is failing to absorb nutrients from their food. This could be a sign of premature weaning or require a probiotic or predigestive enzyme.' })
      setOpen(true)
    } else if (poop.poopColor === 'Black') {
      setAlert({ trigger: 'Black', diagnosis: 'of an upper GI tract bleed. Please constact a veterinarian as soon as possible, unless this is the kitten\'s first poop after being born.' })
      setOpen(true)
    } else if (poop.poopColor === 'Red') {
      setAlert({ trigger: 'Red', diagnosis: 'of a lower GI tract bleed. Please contact a veterinarian as soon as possible.' })
      setOpen(true)
    } else if (poop.poopTexture === 'Mucousy') {
      setAlert({ trigger: 'Mucousy, Slimy, or Oily', diagnosis: 'of a protozoan parasite such as coccidia or giardia. Make sure the kitten is dewormed and receives a fecal exam to determine if any parasites are present.' })
      setOpen(true)
    } else if (poop.poopTexture === 'Curdled') {
      setAlert({ trigger: 'Curdled-looking', diagnosis: 'of indigestion due to a parasite, bacterium, or difficulty absorbing fats and proteins. Ensure that the food is not spoiled, the kitten is being treated for parasites, and consider a probiotic.' })
      setOpen(true)
    } else if (poop.poopTexture === 'Liquid') {
      setAlert({ trigger: 'Liquid', diagnosis: 'of severe distress. Please contact a veterinarian immediately.' })
      setOpen(true)
    } else if (poop.poopTexture === 'Hard') {
      setAlert({ trigger: 'Hard', diagnosis: 'of severe dehydration or a motility issue. Ensure the kitten is adequately hydrated and if this persists, contact a veterinarian.' })
      setOpen(true)
    } else if (poop.poopTexture === 'Soft') {
      setAlert({ trigger: 'Soft', diagnosis: 'of a moderate GI issue. Ensure the kitten has been dewormedm and if the issue persists, contact a veterinarian.' })
      setOpen(true)
    }
    setFeedings(newFeedings)
    API.updateKitten(
      {
        _id: id,
        feedings: newFeedings
      }
    ).then(res => { console.log(res.data) })
      .catch(err => console.log(err))
  }
  const parentClose = () => {
    setModal(false)
  }
  const parentOpen = () => {
    setModal(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
      <div className="root">
          <Grid container spacing={3}>
              <Grid item xs={12}>
                  <Chart data={feedings}/>
              </Grid>
              <Grid item xs={12}>
                  <ModalButton label="Enter New Feeding" toClose ={parentClose} toOpen ={parentOpen} state={modal} onClick= {handleFormSubmit}>
                      <NewFeedingForm onPoopChange={handlePoopChange} onDateChange={handleDateChange} onAmountChange={handleAmountChange}/>
                  </ModalButton>
                  <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
                      <DialogTitle id="alert-dialog-title">{'Alert!'}</DialogTitle>
                      <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                              {alert.trigger} stool can be a sign {alert.diagnosis}
                          </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                          <Button onClick={handleClose} color="primary" autoFocus>
                              Okay
                          </Button>
                      </DialogActions>
                  </Dialog>
                  <br></br>
                  <Notification />
              </Grid>
              <Grid item xs={12}>
                  <KittenTable data={feedings} />
              </Grid>
          </Grid>
      </div>
  )
}
