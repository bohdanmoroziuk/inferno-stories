import axios from 'axios';

export const API = {
  DEFAULT_QUERY: 'redux',
  DEFAULT_HPP: 5,

  PATH_BASE: 'https://hn.algolia.com/api/v1',
  PATH_SEARCH: '/search?',

  PARAM_SEARCH: 'query=',
  PARAM_PAGE: 'page=',
  PARAM_HPP: 'hitsPerPage='
};

const buildRequestUrl = (searchTerm, page = 0) => {
  return `${API.PATH_BASE}${API.PATH_SEARCH}${API.PARAM_SEARCH}${searchTerm}&${API.PARAM_PAGE}${page}&${API.PARAM_HPP}${API.DEFAULT_HPP}`;
};

const StoriesService = {
  get(searchTerm, page) {
    const url = buildRequestUrl(searchTerm, page);

    return axios.get(url);
  }
};

export default StoriesService;