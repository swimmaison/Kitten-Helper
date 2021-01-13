import React, { Component } from "react";
 
class KittenList extends Component {
  state = {
    listitems: ["kitten1", "kitten2"
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
              {listitem}
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