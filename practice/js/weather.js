const API_KEY = "aad33fc82fae88e9fc46d7a2b0d7179b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  fetch(url).then(respose => respose.json())
    .then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = data.weather[0].main;
    city.innerText = data.name;
  });
}

function onGeoError() {
  alert("Can't find you");
}

// 브라우저에서 위치 좌표 알려줌
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);