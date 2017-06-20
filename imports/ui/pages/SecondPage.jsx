import React, {Component} from 'react';
import {Link} from 'react-router';

export default class SecondPage extends Component {

  render() {
    return (
      <div>
      <h1 className="ht">PAGE 2</h1>
      <div className="alert alert-warning">
        <h2 className="faf">TOTALLY COOL</h2>
      </div>
    <Link to="/"><button className="btn btn-info bh">Go to Home Page</button></Link>
    <Link to="/third"><button className="btn btn-danger b2">Go to Third Page</button></Link>
    </div>
    )
  }
}
