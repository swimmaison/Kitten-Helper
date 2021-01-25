/* eslint-disable react/prop-types */
import React, { Component } from 'react'
// import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router'
import API from '../utils/API'
import NewKittenForm from './NewKittenForm'
import ModalButton from './ModalButton'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'
import 'fontsource-roboto'

let [month, day, year] = new Date().toLocaleDateString('en-US').split('/')
if (parseInt(month) < 10) {
  month = '0' + month
};
const today = year + '-' + month + '-' + day

class KittenList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Kittens: [
      ],
      isOpen: false,
      formValues: {
        name: '',
        gender: '',
        description: '',
        birthdate: today
      },
      isUpdate: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.updateKitten = this.updateKitten.bind(this)
    this.deleteKitten = this.deleteKitten.bind(this)
    this.parentClose = this.parentClose.bind(this)
    this.parentOpen = this.parentOpen.bind(this)
    this.loadKittens = this.loadKittens.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentDidMount () {
    this.loadKittens()
    if (!localStorage.getItem('token')) {
      this.props.history.push('/signup')
    }
  }

  loadKittens () {
    API.getKittens().then((res) => {
      this.setState({ Kittens: res.data })
      console.log(res.data)
    })
  }

  handleInputChange (e) {
    const { name, value } = e.target
    this.setState({
      formValues:
      {
        ...this.state.formValues,
        [name]: value
      }
    })
    console.log(this.state.formValues)
  }

  deleteKitten (id) {
    API.deleteKitten(id).then(res => {
      this.loadKittens()
    })
  }

  viewKitten (id) {
    this.props.history.push(`/kitten/${id}`)
  }

  updateKitten (id) {
    API.getKitten(id).then((res) => {
      this.setState({ isOpen: true, isUpdate: true, formValues: res.data })
    }
    )
  }

  parentClose () {
    this.setState({
      isOpen: false,
      formValues: {
        name: '',
        gender: '',
        description: '',
        birthdate: today
      }
    })
    this.loadKittens()
  }

  parentOpen () {
    this.setState({ isOpen: true })
  }

  handleFormSubmit (event) {
  // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault()
    console.log(this.state.isUpdate)
    if (this.state.isUpdate === true) {
      API.updateKitten(
        this.state.formValues
      ).then(res => {
        console.log(res.data)
        this.setState({ isUpdate: false })
      })
        .catch(err => console.log(err))
    } else {
      API.saveKitten(this.state.formValues).then(res => {
        console.log(res.data)
      })
      this.loadKittens()
    }
  }

  render () {
    return (
        <div>
            <Container>
                {
 this.state.Kittens.map(
   Kitten =>
       <Card variant = "outlined" key = {Kitten._id}>
           <CardContent>
               <Typography gutterBottom variant="h3" component="h3">{Kitten.name}</Typography>
               <Typography variant="h5" component="p"> {Kitten.gender}</Typography>
               <Typography variant="h5" component="p"> {Kitten.description}</Typography>
               <Typography variant="h5" component="p"> {Kitten.birthdate}</Typography>
           </CardContent>
           <CardActions>
               <Button onClick={ () => this.updateKitten(Kitten._id)} variant="contained" color="primary">Update </Button>
               <Button onClick={ () => this.deleteKitten(Kitten._id)} variant="contained" color="secondary">Delete </Button>
               <Button onClick={ () => this.viewKitten(Kitten._id)} variant="contained" color="default">View </Button>
           </CardActions>
       </Card>
 )
  }
                <br />
                <ModalButton onClick={this.handleFormSubmit} toOpen={this.parentOpen} toClose={this.parentClose}label="Enter New Kitten" state={this.state.isOpen}>

                    <NewKittenForm values={this.state.formValues} onChange={this.handleInputChange} /></ModalButton>
            </Container>
            <br /> <br />
        </div>
    )
  }
}

export default withRouter(KittenList)
