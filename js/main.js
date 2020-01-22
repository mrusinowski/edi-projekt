window.onload = () => {
    document.getElementById('cities').onchange = () => {
        getAirPollution()
        drawPollutionChart()
        drawWeatherChart()
    }
    document.getElementById('pollution-type').onchange = () => {
        drawPollutionChart()
    }
    getAirPollution()
    drawPollutionChart()
    drawWeatherChart()
}