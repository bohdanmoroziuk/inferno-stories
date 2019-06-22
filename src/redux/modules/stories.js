import axios from 'axios';

// Ducks: Redux Reducer Bundles
// Widget: stories

// Constants
const widgetName = 'stories';

const appName = process.env.INFERNO_APP_NAME;

export const API = {
  DEFAULT_QUERY: 'redux',
  DEFAULT_HPP: 5,

  PATH_BASE: 'https://hn.algolia.com/api/v1',
  PATH_SEARCH: '/search?',

  PARAM_SEARCH: 'query=',
  PARAM_PAGE: 'page=',
  PARAM_HPP: 'hitsPerPage='
};

// Helpers
export const buildRequestUrl = (searchTerm, page = 0) => {
  return `${API.PATH_BASE}${API.PATH_SEARCH}${API.PARAM_SEARCH}${searchTerm}&${
    API.PARAM_PAGE
  }${page}&${API.PARAM_HPP}${API.DEFAULT_HPP}`;
};

export const makeActionType = (type, variant = '') => {
  const actionType = `${widgetName}/${appName}/${type.toUpperCase()}`;

  return variant ? `${actionType}_${variant.toUpperCase()}` : actionType;
};

// Actions
const REQUEST_STARTED = makeActionType('request', 'started');
const REQUEST_SUCCESS = makeActionType('request', 'success');
const REQUEST_FAILURE = makeActionType('request', 'failure');

// Initial State
const initialState = {
  data: {},
  error: null,
  isLoading: false
};

// Reducer
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.stories
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        data: {},
        isLoading: false,
        error: payload.error
      };
    default:
      return state;
  }
}

// Action Creators
export const requestStarted = () => ({
  type: REQUEST_STARTED
});

export const requestSuccess = stories => ({
  type: REQUEST_SUCCESS,
  payload: {
    stories
  }
});

export const requestFailure = error => ({
  type: REQUEST_FAILURE,
  payload: {
    error
  }
});

// Side effect
// e.g. thunks, epics, etc
export const fetchStories = (searchTerm, page) => async dispatch => {
  dispatch(requestStarted());

  const url = buildRequestUrl(searchTerm, page);

  try {
    const { data } = await axios(url);
    return dispatch(requestSuccess(data));
  } catch (error) {
    return dispatch(requestFailure(error));
  }
};

// Selectors
export const selectStories = state => state.stories;
