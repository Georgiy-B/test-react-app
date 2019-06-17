import {
  FETCH_TOP_HEADLINES,
  FETCH_TOP_HEADLINES_SUCCESS,
  FETCH_TOP_HEADLINES_ERROR
} from '../constants/news';

const INITIAL_STATE = {
  headlines: [],
  fetching: false,
  error: null
};

function newsReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TOP_HEADLINES:
      return Object.assign({}, state, { fetching: true });
    case FETCH_TOP_HEADLINES_SUCCESS:
      return Object.assign({}, INITIAL_STATE, { headlines: action.payload });
    case FETCH_TOP_HEADLINES_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}

export default newsReducer;