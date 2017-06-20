import React, {Component} from 'react';

export default class Header extends Component {

  render() {
    return (
<div>
  <Link to="/">Home/Link>
  <Link to="/second">Go to Second Page</Link>
  <Link to="/third">Third Page</Link>
</div>
    )
  }
}
