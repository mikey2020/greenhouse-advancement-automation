import axios from 'axios';
import { LOAD_JOBS } from '../constants';

const getJobSuccess = payload => ({
  type: LOAD_JOBS,
  payload
})

export function getJobs() {
  return dispatch => (
    axios.get(
      'https://greenhouse-advancement-api.herokuapp.com/jobs/?created_after=2018-05-01T04:36:59.192Z'
    )
    .then(({ data }) => {
      dispatch(getJobSuccess(data));
      return true;
    }, (err) => {
      console.log('an error occured on this api call >>>>>>>');
      console.log(err);
    })
  );
}
