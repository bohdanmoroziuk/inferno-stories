import { combineReducers } from 'redux';
import storiesReducer from './modules/stories';

const rootReducer = combineReducers({
  stories: storiesReducer
});

export default rootReducer;
