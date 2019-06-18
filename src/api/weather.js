const url = `https://api.openweathermap.org/data/2.5/`;
const token = '5baf37b36f937f84f4cd7f3295c5519b';

export function fetchDailyForecast(city) {
  return fetch(`${url}forecast?q=${city}&mode=json&units=metric&appid=${token}`)
    .then(res => res.json())
    .then(res => {
      return {
        city: res.city,
        list: res.list
      };
    });
}

export function getIconImgUrl(iconName) {
  return `http://openweathermap.org/img/w/${iconName}.png`;
}