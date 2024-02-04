const apiKey = "21e0c886d8f265dd12bf3818b22bf6ab",
  apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=",
  searchBtn = document.querySelector("#search-btn"),
  inputBox = document.querySelector("#input-city"),
  weatherIcon = document.querySelector("#weather-icon"),
  show = document.querySelector("#status-display"),
  invalid = document.querySelector(".error");

const cheakWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  if (response.status === 404) {
    invalid.classList.add("invalid-name");
  }

  //   fetching details
  const cityName = document.getElementById("city-name"),
    temparature = document.getElementById("temp"),
    humidity = document.getElementById("humidity-percentage"),
    windSpeed = document.getElementById("wind-speed");
  temparature.innerHTML =
    Math.round(Math.ceil(data.main.temp)) + "<sup>°C</sup>";
  cityName.innerHTML = data.name;
  humidity.innerHTML = data.main.humidity + " %";
  windSpeed.innerHTML = data.wind.speed + " km/h";

  //   let weatherIcons = [
  //     "Clear",
  //     "Clouds",
  //     "Drizzle",
  //     "Mist",
  //     "Rain",
  //     "Snow",
  //     "Smoke",
  //   ];
  //   for (let i = 0; i < weatherIcons.length; i++) {
  //     // console.log(weatherIcons[i]);
  //     if (data.weather[0].main != weatherIcons[i]) {
  //       weatherIcon.src = `imgs/${weatherIcons[i]}.png`;
  //       break;
  //     }
  //   }
  switch (data.weather[0].main) {
    case "Clear":
      weatherIcon.src = `imgs/clear.png`;
      break;
    case "Clouds":
      weatherIcon.src = `imgs/clouds.png`;
      break;
    case "Drizzle":
      weatherIcon.src = `imgs/drizzle.png`;
      break;
    case "Mist":
      weatherIcon.src = `imgs/mist.png`;
      break;
    case "Rain":
      weatherIcon.src = `imgs/rain.png`;
      break;
    case "Snow":
      weatherIcon.src = `imgs/snow.png`;
      break;
    case "Smoke":
      weatherIcon.src = `imgs/smoke.png`;
      break;
  }

  console.log(data);
};

searchBtn.addEventListener("click", () => {
  let city = inputBox.value;
  cheakWeather(city);
  if (city === "") {
    alert("Enter city name");
  }
});
