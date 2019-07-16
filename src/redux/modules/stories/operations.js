import actions from './actions';
import StoriesService from '../../../services/api/stories';

const fetchStories = (searchTerm, page) => async dispatch => {
  dispatch(actions.requestStarted());

  try {
    const { data } = await StoriesService.get(searchTerm, page);
    return dispatch(actions.requestSuccess(data));
  } catch (error) {
    return dispatch(actions.requestFailure(error));
  }
};

export default {
  fetchStories
};