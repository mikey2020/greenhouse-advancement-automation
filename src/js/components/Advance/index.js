import React, { Component } from 'react';
import logo from '../../../img/logo_a.png';
import { getJobs } from '../../actions/jobs';
import { advance } from '../../actions/advance';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import shortId from 'shortid';

class Advance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: this.props.jobs,
      jobValue: '',
      fileLocation: '',
      stageValue: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onAdvance = this.onAdvance.bind(this);
  }

  componentDidMount() {
    this.props.getJobs();
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      jobs: nextProps.jobs
    })
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onAdvance(event) {
    event.preventDefault();
    let payload = {
      fileLocation: this.state.fileLocation,
      jobValue: this.state.jobValue,
      stageValue: this.state.stageValue
    }
    this.props.advance(payload)
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
                    <input
                      name="fileLocation"
                      onChange={this.onChange}
                      type="file"
                      accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    />
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
                  <select
                    onChange={this.onChange}
                    value={this.state.jobValue}
                    name="jobValue"
                  >
                    <option value="" disabled selected>Select Job</option>
                    {this.state.jobs.map(job => (
                      <option key={shortId.generate()} value={job.id}>{job.name} stuff here</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col s12 m6">
                <div className="input-field col s12">
                  <select
                    onChange={this.onChange}
                    value={this.state.stageValue}
                    name="stageValue"
                  >
                    <option value="" disabled selected>Select Stage</option>
                    <option value="QUALIFIED">Saberr -> Qualified</option>
                    <option value="FACE">Qualified -> Face to Face</option>
                    <option value="BOOTCAMPSCHEDULE">Face to Face -> Bootcamp Scheduling</option>
                    <option value="BOOTCAMPWEEK1">Bootcamp Scheduling -> Bootcamp Week 1</option>
                    <option value="BOOTCAMPWEEK2">Bootcamp Week 1 -> Bootcamp Week 2</option>
                    <option value="OFFER">Bootcamp Week 2 -> Offer</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <a onClick={this.onAdvance} className="waves-effect waves-light btn">ADVANCE</a>
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
    jobs: state.jobs.jobs
  }
);

export default connect(
  mapStateToProps,
  { getJobs, advance }
)(withRouter(Advance));
