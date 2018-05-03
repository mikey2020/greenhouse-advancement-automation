import React, { Component } from 'react';
import logo from '../../../img/logo_a.png';
import notFoundIcon from '../../../img/notfound.png';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.onHome = this.onHome.bind(this);
  }

  onHome(event) {
    event.preventDefault();
    this.props.history.push('/advance');
  }
  render () {
    return (
      <div className="App">
        <div className="row login-wrapper">
          <img className="logo" src={logo} alt="logo" />
          <img height="120vh" src={notFoundIcon} alt="404" />
          <h3 onClick={this.onHome} className="notFound">ERROR 404</h3>
        </div>
      </div>
    )
  }
}

export default NotFound;
