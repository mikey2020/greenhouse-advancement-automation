import React, { Component } from 'react';
import logo from '../../../img/logo_a.png';

class Advance extends Component {

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <div className="nav-wrapper">
            <img src={logo} alt="logo" height="80vh" className="brand-logo" />
          </div>
        </nav>

        <div className="container">
          <form className="advance">
            <div className="row">
              <div className="col s12">
                <div className="file-field input-field">
                  <div className="btn">
                    <span>File</span>
                    <input type="file" />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <div className="input-field col s12">
                  <select>
                    <option value="" disabled selected>Select Job</option>
                    <option value="1">Job 1</option>
                    <option value="2">Job 2</option>
                    <option value="3">Job 3</option>
                  </select>
                </div>
              </div>
              <div className="col s12 m6">
                <div className="input-field col s12">
                  <select>
                    <option value="" disabled selected>Select Stage</option>
                    <option value="1">Stage 1 -> Stage 2</option>
                    <option value="2">Stage 2 -> Stage 3</option>
                    <option value="3">Stage 3 -> Stage 4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <a className="waves-effect waves-light btn">ADVANCE</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Advance;
