const WEATHER_API_KEY = process.env.WEATHER_API_KEY ?? ''; // enter issued API KEY
const LocStor_COORDS = 'coords';
const weather = document.querySelector('.js-weather');

const saveCoords = (coords) => {
  localStorage.setItem(LocStor_COORDS, JSON.stringify(coords));
};

const handleGeoSuccess = (position) => {
  const { latitude, longitude } = position.coords;
  saveCoords({ latitude: String(latitude), longitude: String(longitude) });
};

const handleGeoError = (err) => {
  console.info(err);
};

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

const getWeather = (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const {
        name,
        main: { temp },
      } = json.list[0];
      weather.innerText = `${temp} @${name}`;
    })
    .catch(console.err);
};

const loadCoords = () => {
  const loadedCoords = localStorage.getItem(LocStor_COORDS);
  if (!loadedCoords) {
    askForCoords();
  } else {
    const { latitude, longitude } = JSON.parse(loadedCoords);
    // console.log(latitude, longitude);
    getWeather(latitude, longitude);
  }
};

const init = () => {
  loadCoords();
};

init();
