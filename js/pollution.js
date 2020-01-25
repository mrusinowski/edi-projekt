var pollution_chart_config = {
    labels: [],
    series: [[]]
}
var chart1 = null
function drawPollutionChart() {
    document.getElementById("no-data").innerHTML = ""
    let no_data = 0
    pollution_chart_config.series = [[]]
    pollution_chart_config.labels = []
    let cities = document.getElementById('cities')
    let val = cities.options[cities.selectedIndex]
    let lng = val.getAttribute('data-lng')
    let lat = val.getAttribute('data-lat')
    let type = document.getElementById('pollution-type')
    type = type.options[type.selectedIndex].value
    fetch('https://airapi.airly.eu/v2/measurements/nearest?lat=' + lat + '&lng=' + lng + '&maxDistanceKM=30', {
        headers: {
            'apikey': 'eVy2LvD5QyFeFzI0n5NFN8IqLePzwU8R'
        }
    })
        .then((res) => { return res.json() })
        .then((json) => {
            //console.log(json)
            //pollution_chart_config.labels.push(json.history[0].values[0].name)
            for (let i = 0; i < json.history.length; i++) {
                try {
                    let date = json.history[i].fromDateTime

                    let day = date.split('T')[0]
                    let time = date.split('T')[1]
                    time = time.split(":")
                    date = day + " " + time[0] + ":" + time[1]
                    pollution_chart_config.labels.push(date)

                    if(json.history[i].values[type] == undefined) no_data++
                    
                    if(no_data == json.history.length) document.getElementById("no-data").innerHTML = "Brak danych" 
                    
                    pollution_chart_config.series[0].push(json.history[i].values[type].value)


                } catch (err) {

                }
            }
            if(type == 3) chart1 = new Chartist.Bar('#pollution-chart', pollution_chart_config, {high: 1025, low: 1015}) 
            else chart1 = new Chartist.Bar('#pollution-chart', pollution_chart_config)
        })
}