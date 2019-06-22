const url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define';
const headers = {
  'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
  'X-RapidAPI-Key': 'd7e26f9e2cmsh341296f5f71029cp13e66ajsnafb8001767bf'
};

export function fetchUrbanDefinitions(term) {
  return fetch(`${url}?term=${term}`, {headers})
    .then(res => res.json())
    .then(res => res.list);
}