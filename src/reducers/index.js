import { combineReducers } from 'redux';
import news from './news';
import weather from './weather';

const rootReducer = combineReducers({
  news,
  weather
});

export default rootReducer;