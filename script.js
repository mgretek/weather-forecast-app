let currentDateTime = new Date();

let timeInfo = document.querySelector(".currentLocation__dateTime");

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

let currentWeekDay = weekDays[currentDateTime.getDay()];
let currentDate = String(currentDateTime.getDate()).padStart(2, "0");
let currentMonth = String(months[currentDateTime.getMonth()]).padStart(2, "0");
let currentYear = currentDateTime.getFullYear();
let currentHours = String(currentDateTime.getHours()).padStart(2, "0");
let currentMinutes = String(currentDateTime.getMinutes()).padStart(2, "0");

timeInfo.innerHTML = `${currentWeekDay}, ${currentDate}.${currentMonth}.${currentYear} </br> ${currentHours}:${currentMinutes}`;

//--- *** ---//

function showCurrentTemperature(response) {
  let roundedCurrentTemp = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector("#currentTemp");
  currentTemperature.innerHTML = roundedCurrentTemp;
}

function searchingLocation(event) {
  event.preventDefault();
  let searchedLocation = document.querySelector(
    ".locationSearchForm__searchbar"
  );
  let currentLocation = document.querySelector(".currentLocation");
  currentLocation.innerHTML = searchedLocation.value.toUpperCase();

  apiKey = "eef37dfd6a726a192277c649373fb837";
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedLocation.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCurrentTemperature);
}

let searchForm = document.querySelector(".locationSearchForm");
searchForm.addEventListener("submit", searchingLocation);

//--- *** ---//

function showCurrentLocationInfo() {
  navigator.geolocation.getCurrentPosition(success, error);
}

let currentLocationButton = document.querySelector("#my-current-location");
currentLocationButton.addEventListener("click", showCurrentLocationInfo);

function showCurrentLocationTemperature(response) {
  console.log(response);
  let myLocationCurrent = document.querySelector("#currentTemp");
  myLocationCurrent.innerHTML = Math.round(response.data.main.temp);
  let myCurrentCity = document.querySelector(".currentLocation");
  myCurrentCity.innerHTML = response.data.name.toUpperCase();
}

function success(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  apiKeyCurrent = "eef37dfd6a726a192277c649373fb837";
  apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKeyCurrent}&units=metric`;

  axios.get(apiUrlCurrent).then(showCurrentLocationTemperature);
}

function error() {
  alert("Please allow access to your location to show current temperature.");
}

//--- *** ---//
/*
function displayFahr() {
  let tempNow = document.querySelector(
    ".weatherNow__temperature--degreeNumber"
  );

  tempNow.innerHTML = "72";
}

let tempFahr = document.querySelector(
  ".weatherNow__temperatureFahrenheit--sign"
);
tempFahr.addEventListener("click", displayFahr);

function displayCel() {
  let tempNow = document.querySelector(
    ".weatherNow__temperature--degreeNumber"
  );

  tempNow.innerHTML = "22";
}

let tempCel = document.querySelector(".weatherNow__temperatureCelsius--sign");
tempCel.addEventListener("click", displayCel);
*/

/*function displayOtherUnit() {
  let tempNow = document.querySelector(
    ".weatherNow__temperature--degreeNumber"
  );
  let changeUnitsMain = document.querySelector(
    ".weatherNow__temperatureCelsius--sign"
  );
  let changeUnitsOther = document.querySelector(
    ".weatherNow__temperatureFahrenheit--sign"
  );
  tempNow.innerHTML = "72";
  changeUnitsMain.innerHTML = "°F";
  changeUnitsOther.innerHTML = "°C";
}

let tempOtherUnit = document.querySelector(
  ".weatherNow__temperatureFahrenheit--sign"
);
tempOtherUnit.addEventListener("click", displayOtherUnit);*/
