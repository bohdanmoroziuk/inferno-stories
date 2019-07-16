const WIDGET_NAME = 'stories';
const APP_NAME = process.env.INFERNO_APP_NAME;

const API = {
  DEFAULT_QUERY: 'redux',
  DEFAULT_HPP: 5,

  PATH_BASE: 'https://hn.algolia.com/api/v1',
  PATH_SEARCH: '/search?',

  PARAM_SEARCH: 'query=',
  PARAM_PAGE: 'page=',
  PARAM_HPP: 'hitsPerPage='
};

export default {
  WIDGET_NAME,
  APP_NAME,
  API,
};