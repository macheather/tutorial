import React, {Component} from 'react';
import { browserHistory } from 'react-router';

export default class SignIn extends Component {

  render() {

    let submitSignIn = () => {
      const password = this.refs.password.value.trim();
      const username = this.refs.username.value.trim();

      Meteor.loginWithPassword(email, password, (error) => {
        if (error) {
          return Bert.alert('Invalid Username and/or Password. Please try again.', 'danger', 'fixed-top', 'fa-frown-o');
        } else {
          browserHistory.push('/')
        }
      });

    }
    return (
      <div className="form-horizontal">
        <div className="form-group">
          <label htmlFor="inputUsername" className="col-sm-2 control-label">Username</label>
          <div className="col-sm-10">
            <input ref="username" type="username" className="form-control" id="inputUsername" placeholder="Username"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input ref="password" type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button onClick={submitSignIn} type="submit" className="btn btn-default">Login</button>
          </div>
        </div>
      </div>
    )
  }
}
