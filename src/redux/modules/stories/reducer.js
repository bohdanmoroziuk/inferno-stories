import types from './types';

const initialState = {
  data: {},
  error: null,
  isLoading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.stories
      };
    case types.REQUEST_FAILURE:
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