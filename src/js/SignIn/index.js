import React, { Component } from 'react';
import logo from '../../img/logo_a.png';
import googleButton from '../../img/googleButton.png';


class SignIn extends Component {
  render () {
    return (
      <div className="row login-wrapper">
      <img className="logo" src={logo} alt="logo" />
        <a className=" signin" href="/home">
        <img className="waves-effect google-btn" src={googleButton} alt="button" />
        </a>
      </div>
    )
  }
}

export default SignIn;
