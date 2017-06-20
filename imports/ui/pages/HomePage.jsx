import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomePage extends Component {

  render() {
    return (
      <div>
      <h1 className="faf">WELCOME</h1>
      <div className="alert alert-info">
        <h2 className="xtr">XTREME APPLICATION</h2>
      </div>
      <Link to="/second"><button className="btn btn-success b1">Go to Second Page</button></Link>
      <Link to="/third"><button className="btn btn-danger b2">Go to Third Page</button></Link>
      </div>
    )
  }
}
