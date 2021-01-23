/* eslint-disable react/prop-types */
import React, { Component } from 'react'
// import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router'
import API from '../utils/API'
import List from '@material-ui/core/List'

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
    this.props.history.push(`/view-Kitten/${id}`)
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
            <h2 className="text-center">Kittens List</h2>
            <div className = "row">
                <button className="btn btn-primary" onClick={this.addKitten}> Add Kitten</button>
            </div>
            <br></br>
            <div>
                <List>
                    <li> Name </li>
                    <li> Age </li>
                    <li> Weight </li>
                </List>

                {
//  this.state.Kittens.map(
//    Kitten =>
//        <div key = {Kitten.id}>
//            <li>  {Kitten.name} </li>
//            <li> {Kitten.age}</li>
//            <li> {Kitten.weight}</li>
//            <li>
//                <button onClick={ () => this.updateKitten(Kitten.id)} className="btn btn-info">Update </button>
//                <button style={{ marginLeft: '10px' }} onClick={ () => this.deleteKitten(Kitten.id)} className="btn btn-danger">Delete </button>
//                <button style={{ marginLeft: '10px' }} onClick={ () => this.viewKitten(Kitten.id)} className="btn btn-info">View </button>
//            </li></div>
//  )
console.log(this.state.Kittens)
  }
            </div>
        </div>
    )
  }
}

export default withRouter(KittenList)
