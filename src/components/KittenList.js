var React = require('react');
var List = require('./List');
var addKitten = require('./addKitten');

var kittenList = React.createClass({
  
  getInitialState: function () {
    return {
      list: {}
    };
  },

  updateList: function (newList) {
    this.setState({
      list: newList
    });
  },

  addKitten: function (item) {
    var list = this.state.list;

    list[item.id] = item;

    this.updateList(list);
  },

  removeListItem: function (itemId) {
    var list = this.state.list;

    delete list[itemId];

    this.updateList(list);
  },

  removeAllListItems: function () {
    this.updateList({});
  },

  render: function () {
    var items = this.state.list;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">

            <List 
              items={items}
              removeListItem={this.removeListItem} 
              removeAllListItems={this.removeAllListItems} />
              
          </div>
          <div className="col-sm-6">

            <addKitten addKitten={this.addKitten} />
          
          </div>
        </div>
      </div>
    );
  }
});

module.exports = kittenList;
