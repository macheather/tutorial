import React, {Component} from 'react';
import {browserHistory, Link} from 'react-router';

export default class ProductGrid extends Component {

  render() {
    let {name, volume, price, _id} = this.props.product;

    let deleteItem = () => {
      var id = _id;
      Meteor.call("deleteProduct", id, function(err, result) {
        if(err) {
          console.log("error!! ", err);
        } else {
          console.log("successfully deleted!!");
        }
      });
    }

    return (

      <div><Link to={"/update/" + _id}>{name}</Link> - {price} - {volume} - <button className="btn btn-danger btn-xs" onClick={deleteItem}>delete</button> </div>
    )
  }
}
