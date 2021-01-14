import React, { Component } from "react";
import Button from '@material-ui/core/Button';
 

class KittenList extends Component {
  state = {
    listitems: [
    ]
  };
 
  renderItems() {
    if (this.state.listitems.length === 0) {
      return (
        <div class="alert alert-warning" role="alert">
          Please add a kitten to get started!
        </div>
      );
    } else {
      return (
        <ul className="list-group">
          {this.state.listitems.map(listitem => (
            <li className="list-group-item list-group-item-primary">
              <Button>{listitem} </Button>
            </li>
          ))}
        </ul>
      );
    }
  }
 
  render() {
    return <React.Fragment>{this.renderItems()}</React.Fragment>;
  }
}
 
export default KittenList;