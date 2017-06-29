import React, {Component} from 'react';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

export default class LoginSignup extends Component {
  constructor(props){
    super(props);
      this.state={signup: false};
    }

  render() {
    let updateSignUp = () => {
      this.setState({'signup': !this.state.signup});
    }

    return (
      <div>
        {this.state.signup ? <SignUp /> : <SignIn />}
        <div>
          <span href="" onClick={updateSignUp} style={{cursor: 'pointer'}}>
            {this.state.signup ? "Already a user? Login Here": "Are you a new user? Register Here"}
          </span>
        </div>
      </div>
    )
  }
}
