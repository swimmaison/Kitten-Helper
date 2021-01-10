import React, { Component } from 'react'

class KittenList extends Component {
    constructor () {
        super()
        this.state = {
            message: 'Kitten 1'
        }
    }

clickHandler(){

this.setState({
    message: 'kitten2'
})
}



    render() {
        return (<div> 
            <h1>
                Kitten List:
                {this.state.message}
            </h1>
            <button onClick = {this.clickHandler.bind(this)}>Add a Kitten</button>

        </div>
           
        )
    }
}

export default KittenList