import React, {Component} from 'react';
import {Link} from 'react-router';

export default class SecondPage extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <img src="https://swchllc.s3.amazonaws.com/photos/cali_yogo-strawberry.jpg"></img>
            <h2 className="text-center">Yogo Strawberry</h2>
            <p className="lead">
              <strong>Description: </strong>
              Strawberries have been blended with the popular Japanese yogurt drink to bring you a refreshing all day vape.
            </p>
            <p className="lead">
              <strong>Flavors: </strong>
              strawberry | yogurt | creamy
            </p>
            <h2 className="text-center">$15.99 </h2>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    )
  }
}
