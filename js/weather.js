function drawWeatherChart() {
    let cities = document.getElementById('cities')
    let val = cities.options[cities.selectedIndex]
    let lng = val.getAttribute('data-lng')
    let lat = val.getAttribute('data-lat')
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=b957491ead8b20a655be6de2daac8538&units=metric')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson)
            document.getElementById('weather').innerHTML = ""
            var img = document.createElement("img");
            img.src = "http://openweathermap.org/img/wn/"+myJson.weather[0].icon+"@2x.png";
            var src = document.getElementById("weather");
            src.appendChild(img);
            var span = document.createElement("span");
            span.innerHTML=" "
            src.appendChild(span);
}