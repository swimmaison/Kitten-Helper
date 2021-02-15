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
import LogooutBtn from './LogoutBtn'

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
    if (!localStorage.getItem('token')) {
      this.props.history.push('/signup')
    }
    this.loadKittens()
  }

  parseJwt (token) {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
    const payload = JSON.parse(jsonPayload)
    return payload.email
  }

  loadKittens () {
    let user
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      user = this.parseJwt(token)
    }
    this.setState({
      formValues:
      {
        ...this.state.formValues,
        user: user
      }
    })
    console.log(user)
    API.getKittens().then((res) => {
      const userKittens = []
      res.data.forEach(kitten => {
        if (kitten.user === user) {
          userKittens.push(kitten)
        }
      })
      this.setState({ Kittens: userKittens })
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
  // When the form is submitted, prevent its default behavior, add user auth token and save it with the data
    event.preventDefault()
    if (this.state.isUpdate === true) {
      API.updateKitten(
        this.state.formValues
      ).then(res => {
        this.setState({ isUpdate: false })
        this.loadKittens()
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
                <LogooutBtn />
            </Container>
            <br /> <br />
        </div>
    )
  }
}

export default withRouter(KittenList)
