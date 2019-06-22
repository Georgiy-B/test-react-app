import {
  FETCH_URBAN_DEFINITIONS,
  FETCH_URBAN_DEFINITIONS_SUCCESS,
  FETCH_URBAN_DEFINITIONS_ERROR
} from '../constants/urban';

export function fetchUrbanDefinitions(term) {
  return {
    type: FETCH_URBAN_DEFINITIONS,
    payload: term
  };
}

export function fetchUrbanDefinitionsSuccess(definitions) {
  return {
    type: FETCH_URBAN_DEFINITIONS_SUCCESS,
    payload: definitions
  };
}

export function fetchUrbanDefinitionsError(error) {
  return {
    type: FETCH_URBAN_DEFINITIONS_ERROR,
    paylaod: error
  };
}