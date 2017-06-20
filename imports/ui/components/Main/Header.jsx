import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  render() {
    return (
        <div>
        <ul className="nav nav-pills">
            <li role="presentation" className="active"><Link to="/">Home</Link></li>
            <li role="presentation"><Link to="/add">Add Products</Link></li>
        </ul>
        </div>

    )
  }
}
