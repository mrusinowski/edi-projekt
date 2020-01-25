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
                chart2 = new Chartist.Line('#gold-chart', gold_chart_config, gold_options)
            })
}