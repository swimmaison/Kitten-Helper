/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router'

class KittenList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listitems: [
      ]
    }
  }

  componentDidMount () {
    console.log(this.props)
    if (!localStorage.getItem('token')) {
      this.props.history.push('/signup')
    }
  }

  renderItems () {
    if (this.state.listitems.length === 0) {
      return (
          <div className="alert alert-warning" role="alert">
              Please add a kitten to get started!
          </div>
      )
    } else {
      return (
          <ul className="list-group">
              {this.state.listitems.map((listitem, i) => (
                  <li key= {i} className="list-group-item list-group-item-primary">
                      <Button>{listitem} </Button>
                  </li>
              ))}
          </ul>
      )
    }
  }

  render () {
    return <React.Fragment>{this.renderItems()}</React.Fragment>
  }
}

export default withRouter(KittenList)
