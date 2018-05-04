import axios from 'axios';
import jquery from 'jquery';
import { LOAD_JOBS } from '../constants';

const getJobSuccess = payload => ({
  type: LOAD_JOBS,
  payload
})



export function getJobs() {
  return dispatch => (
    axios.get(
      'https://greenhouse-advancement-api.herokuapp.com/jobs/'
    )
    .then((data) => {
      console.log(data);
      return true;
    }, (err) => {
      console.log('an error occured on this api call >>>>>>>');
      console.log(err);
    })
  );
}

