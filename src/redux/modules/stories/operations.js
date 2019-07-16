import axios from 'axios';
import actions from './actions';
import constants from './constants';

const { API } = constants;

const buildRequestUrl = (searchTerm, page = 0) => {
  return `${API.PATH_BASE}${API.PATH_SEARCH}${API.PARAM_SEARCH}${searchTerm}&${
    API.PARAM_PAGE
  }${page}&${API.PARAM_HPP}${API.DEFAULT_HPP}`;
};


const fetchStories = (searchTerm, page) => async dispatch => {
  dispatch(actions.requestStarted());

  const url = buildRequestUrl(searchTerm, page);

  try {
    const { data } = await axios(url);
    return dispatch(actions.requestSuccess(data));
  } catch (error) {
    return dispatch(actions.requestFailure(error));
  }
};

export default {
  fetchStories
};