import { call, put } from 'redux-saga/effects';
import { fetchUrbanDefinitions } from '../api/urban';
import { fetchUrbanDefinitionsSuccess, fetchUrbanDefinitionsError } from '../actions/urban';

function* handleFetchUrbanDefinitions(action) {
  try {
    const definitions = yield call(fetchUrbanDefinitions, action.payload);
    yield put(fetchUrbanDefinitionsSuccess(definitions));
  } catch (error) {
    yield put(fetchUrbanDefinitionsError(error));
  }
}

export default handleFetchUrbanDefinitions;