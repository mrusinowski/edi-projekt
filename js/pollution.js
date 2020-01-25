var pollution_chart_config = {
    labels: [],
    series: [[]]
}
var chart1 = null
function drawPollutionChart() {
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
            console.log(json)
            //pollution_chart_config.labels.push(json.history[0].values[0].name)
            for (let i = 0; i < json.history.length; i++) {
                try {
                    let date = json.history[i].fromDateTime

                    let day = date.split('T')[0]
                    let time = date.split('T')[1]
                    time = time.split(":")
                    date = day + " " + time[0] + ":" + time[1]
                    pollution_chart_config.labels.push(date)
                    pollution_chart_config.series[0].push(json.history[i].values[type].value)
                } catch (err) {

                }
            }
            chart1 = new Chartist.Line('#pollution-chart', pollution_chart_config)
        })
}

var gold_chart_config = {
    labels: [],
    series: [[]]
    }
var chart2 = null
var gold_options = {
    high: 200,
    low: 180,
  };
function drawgoldChart() {
        gold_chart_config.series = [[]]
        gold_chart_config.labels = []
        let gold_price_days = document.getElementById('gold_days').value
        fetch('http://api.nbp.pl/api/cenyzlota/last/' + gold_price_days)
            .then((res) => { return res.json() })
            .then((json) => {
                let dat = json[1].cena
                for (let i = 0; i < json.length; i++){
                    let l = json[i].data
                    let s = json[i].cena
                    gold_chart_config.labels.push(l)
                    gold_chart_config.series[0].push(s)
                }
                chart2 = new Chartist.Bar('#gold-chart', gold_chart_config, gold_options)
            })
}
