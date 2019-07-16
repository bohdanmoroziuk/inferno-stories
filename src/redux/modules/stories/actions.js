import types from './types';

const requestStarted = () => ({
  type: types.REQUEST_STARTED
});

const requestSuccess = stories => ({
  type: types.REQUEST_SUCCESS,
  payload: {
    stories
  }
});

const requestFailure = error => ({
  type: types.REQUEST_FAILURE,
  payload: {
    error
  }
});

export default {
  requestStarted,
  requestSuccess,
  requestFailure,
};