import { LOAD_JOBS } from '../constants';

const initialState = {
  jobs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_JOBS:
    return Object.assign({}, state, {
      jobs: action.payload.jobs
    });

    default:
      return state;
  }
}