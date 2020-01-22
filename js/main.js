window.onload = () => {
    document.getElementById('cities').onchange = () => {
        getAirPollution()
        drawWeatherChart()
    }
    document.getElementById('pollution-type').onchange = () => {
        drawPollutionChart()
    }
    getAirPollution()
    drawPollutionChart()
    drawWeatherChart()
}