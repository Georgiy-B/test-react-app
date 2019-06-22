import { combineReducers } from 'redux';
import news from './news';
import weather from './weather';
import translator from './translator';
import urban from './urban';

const rootReducer = combineReducers({
  news,
  weather,
  translator,
  urban
});

export default rootReducer;