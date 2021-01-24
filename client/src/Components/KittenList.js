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

class KittenList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Kittens: [
      ]
    }
    this.addKitten = this.addKitten.bind(this)
    this.updateKitten = this.updateKitten.bind(this)
    this.deleteKitten = this.deleteKitten.bind(this)
  }

  componentDidMount () {
    API.getKittens().then((res) => {
      this.setState({ Kittens: res.data })
      console.log(res.data)
    })
    if (!localStorage.getItem('token')) {
      this.props.history.push('/signup')
    }
  }

  deleteKitten (id) {
    API.deleteKitten(id).then(res => {
      this.setState({ Kittens: this.state.Kittens.filter(Kitten => Kitten.id !== id) })
    })
  }

  viewKitten (id) {
    this.props.history.push(`/kitten/${id}`)
  }

  updateKitten (id) {
    this.props.history.push(`/add-Kitten/${id}`)
  }

  addKitten () {
    this.props.history.push('/add-Kitten/_add')
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
                <ModalButton label="Enter New Kitten" state={false}>

                    <NewKittenForm /></ModalButton>
            </Container>
        </div>
    )
  }
}

export default withRouter(KittenList)
