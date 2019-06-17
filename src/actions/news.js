import {
  FETCH_TOP_HEADLINES,
  FETCH_TOP_HEADLINES_SUCCESS,
  FETCH_TOP_HEADLINES_ERROR
} from '../constants/news';

export function fetchTopHeadlines() {
  return { type: FETCH_TOP_HEADLINES };
}

export function fetchTopHeadlinesSuccess(news) {
  return {
    type: FETCH_TOP_HEADLINES_SUCCESS,
    payload: news
  };
}

export function fetchTopHeadlinesError(error) {
  return {
    type: FETCH_TOP_HEADLINES_ERROR,
    paylaod: error
  };
}