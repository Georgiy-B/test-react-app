import {
  FETCH_URBAN_DEFINITIONS,
  FETCH_URBAN_DEFINITIONS_SUCCESS,
  FETCH_URBAN_DEFINITIONS_ERROR
} from '../constants/urban';

const INITIAL_STATE = {
  definitions: [],
  fetching: false,
  error: null
};

function urbanReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_URBAN_DEFINITIONS:
      return Object.assign({}, state, { fetching: true });
    case FETCH_URBAN_DEFINITIONS_SUCCESS:
      return Object.assign({}, INITIAL_STATE, { definitions: action.payload });
    case FETCH_URBAN_DEFINITIONS_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });
    default:
      return state;
  }
}

export default urbanReducer;