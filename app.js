//functions
function kelvinToCelsius(kelvin){
  return Math.floor(kelvin - 273.15);
}

// submit fuction 
function searchSubmit(e){
  // prevent page refresh
  e.preventDefault();
  // get user input
  let userInput = document.querySelector('#userCity').value;
  // api request
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=633e5bd6958e78fb51c0dc019868fdc5`)
  .then(response => {
    console.log(response.data);
    let cityName = response.data.name;
    document.querySelector('#cityName').innerText = cityName;

    let celTemp = kelvinToCelsius(response.data.main.temp);
    document.querySelector('#temp').innerText = `${celTemp}°C` ;

    let weatherDescription = response.data.weather[0].description;
    document.querySelector('#description').innerText = weatherDescription;

    let cloud = response.data.clouds.all;
    document.querySelector('#cloud').innerHTML = `<i class="fas fa-cloud"></i> : ${cloud}%`;

    let windSpeed = response.data.wind.speed;
    document.querySelector('#windSpeed').innerHTML = `<i class="fas fa-wind"></i> : ${windSpeed}m/s`;

    let maxTemp = kelvinToCelsius(response.data.main.temp_max);
    document.querySelector('#maxTemp').innerHTML = `<i class="fas fa-temperature-high"></i> : ${maxTemp}°C`;

    let minTemp = kelvinToCelsius(response.data.main.temp_min);
    document.querySelector('#minTemp').innerHTML = `<i class="fas fa-temperature-low"></i> : ${minTemp}°C`
  })
  .catch(error => {
    console.error(error);
  })
}

//add event listener to form
const form = document.querySelector('#search');
form.addEventListener('submit', searchSubmit);
