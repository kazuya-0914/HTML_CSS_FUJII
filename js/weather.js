let html = '';
const weatherData = document.getElementById('weather-data');
const areaBtn = document.getElementsByClassName('weather');
const appKey = 'ddbaf08feecb56297fd2f5b525d4ac47';
const area = {
  tokyo: {
    id: 1850147,
    name: '東京都',
    q: 'Tokyo',
  },
  osaka: {
    id: 1853909,
    name: '大阪府',
    q: 'Osaka',
  }
}

for( let i = 0; i < areaBtn.length; i++) {
  areaBtn[i].addEventListener('click', function(e) {
    e.preventDefault();
    html = '';
    const cityName = this.getAttribute("id");
    const cityData = area[cityName]['q'];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${appKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weatherArr = data.weather;
        const weather = weatherArr[0]['main'];
        console.log(data);
        const icon = `https://openweathermap.org/img/wn/${weatherArr[0]['icon']}@2x.png`;
        const temp = Math.round(data.main.temp - 273.16);
        const wind = data.wind.speed;
        
        html += `
          <dt>アイコン</dt><dd><img src="${icon}"></dd>
          <dt>天気</dt><dd>${weather}</dd>
          <dt>気温</dt><dd>${temp}℃</dd>
          <dt>風速</dt><dd>${wind}（m/s）</dd>`;
        
        weatherData.innerHTML = html;
      });
  });
}
