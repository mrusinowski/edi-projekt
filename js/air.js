window.onload = () => {
    function getAirPollution() {
        let cities = document.getElementById('cities')
        let val = cities.options[cities.selectedIndex]
        let lng = val.getAttribute('data-lng')
        let lat = val.getAttribute('data-lat')
        fetch('https://airapi.airly.eu/v2/measurements/nearest?lat=' + lat + '&lng=' + lng + '&maxDistanceKM=30', {
            headers: {
                'apikey': 'eVy2LvD5QyFeFzI0n5NFN8IqLePzwU8R'
            }
        })
            .then((res) => { return res.json() })
            .then((json) => {
                if (json.current.indexes[0].description == "W tej okolicy nie ma jeszcze naszych sensorów.")
                    json.current.indexes[0].description = "Brak danych."
                document.getElementById('air-span').innerHTML = json.current.indexes[0].description
            })
    }
    document.getElementById('cities').onchange = () => {
        getAirPollution()
        drawPollutionChart()
    }
    document.getElementById('pollution-type').onchange = () => {
        drawPollutionChart()
    }
    getAirPollution()
    drawPollutionChart()
}