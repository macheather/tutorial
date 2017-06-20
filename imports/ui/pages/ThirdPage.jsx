import React, {Component} from 'react';
import {Link} from 'react-router';

export default class ThirdPage extends Component {

  render() {
    return (
      <div>
        <h1 className="th">PAGE 3</h1>
        <div className="alert alert-danger">
          <h2 className="lm">AWESOME!</h2>
        </div>
      <Link to="/"><button className="btn btn-success bh">Go to Home Page</button></Link>
      <Link to="/second"><button className="btn btn-warning b2">Go to Second Page</button></Link>
      </div>
    )
  }
}
