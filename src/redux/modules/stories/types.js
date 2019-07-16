import constants from './constants';

const makeActionType = (type) => {
  return `${constants.WIDGET_NAME}/${constants.APP_NAME}/${type}`;
};

const REQUEST_STARTED = makeActionType('REQUEST_STARTED');
const REQUEST_SUCCESS = makeActionType('REQUEST_SUCCESS');
const REQUEST_FAILURE = makeActionType('REQUEST_FAILURE');

export default {
  REQUEST_STARTED,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
};