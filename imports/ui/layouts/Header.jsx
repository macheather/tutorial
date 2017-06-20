import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  render() {
    return (
      <ul className="nav nav-tabs">
        <li><Link to="/" className="hotpink">Home</Link></li>
        <li> <Link to="/second" id="pink">Second</Link></li>
        <li> <Link to="/third" id="purple">Third</Link></li>
      </ul>
    )
  }
}
