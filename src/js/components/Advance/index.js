import React, { Component } from 'react';
import logo from '../../../img/logo_a.png';
import { getJobs } from '../../actions/jobs';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Advance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: this.props.jobs
    }
  }

  componentDidMount() {
    this.props.getJobs();
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      jobs: nextProps.jobs
    })
  }



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
                    <input type="file" accept="application/vnd.ms-excel application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
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
                    <option value="1">Saberr -> Qualified</option>
                    <option value="2">Qualified -> Face to Face</option>
                    <option value="3">Face to Face -> Bootcamp Scheduling</option>
                    <option value="4">Bootcamp Scheduling -> Bootcamp Week 1</option>
                    <option value="5">Bootcamp Week 1 -> Bootcamp Week 2</option>
                    <option value="6">Bootcamp Week 2 -> Offer</option>
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

const mapStateToProps = state => (
  {
    jobs: state.jobs
  }
);

export default connect(
  mapStateToProps,
  { getJobs }
)(withRouter(Advance));
