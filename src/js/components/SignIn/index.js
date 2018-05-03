import React, { Component } from 'react';
import logo from '../../../img/logo_a.png';
import googleButton from '../../../img/googleButton.png';


class SignIn extends Component {

  constructor(props) {
    super(props);

    this.onAdvance = this.onAdvance.bind(this);
  }

  onAdvance(event) {
    event.preventDefault();
    this.props.history.push('/advance')
  }


  render () {
    return (
      <div className="App">
        <div className="row login-wrapper">
          <img className="logo" src={logo} alt="logo" />
          <a className=" signin" href="/home">
          <img className="waves-effect google-btn" src={googleButton} alt="button" onClick={this.onAdvance} />
          </a>
        </div>
      </div>
    )
  }
}

export default SignIn;
