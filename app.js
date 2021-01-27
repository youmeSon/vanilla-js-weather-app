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
  })
  .catch(error => {
    console.error(error);
  })
}

//add event listener to form
const form = document.querySelector('#search');
form.addEventListener('submit', searchSubmit);
