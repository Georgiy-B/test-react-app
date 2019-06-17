const url = 'https://newsapi.org/v2/';
const apiKey = '2224f6b3071340719aa4953030e258e2';

export function fetchTopHeadlines() {
  return fetch(`${url}top-headlines?country=us&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(res => res.articles);
}