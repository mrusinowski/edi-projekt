window.onload = () => {
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