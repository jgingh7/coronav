google.charts.load('current', {
  packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawTrendlinesNewYork);
google.charts.setOnLoadCallback(drawTrendlinesNewark);
google.charts.setOnLoadCallback(drawTrendlinesDane);
google.charts.setOnLoadCallback(drawTrendlinesChicago);
google.charts.setOnLoadCallback(drawTrendlinesPhilly);
google.charts.setOnLoadCallback(drawTrendlinesLA);

function drawTrendlinesNewYork() {
  const numbers = [
    2892, 2892, 2790,
    2790, 2778, 2229,
    3166, 3027, 2774,
    2322, 2322, 1635,
    1636, 2120
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 8399000)
  getChart('NYC', numbers, averages[0], averages[1], 'chart_newyork')
}

function drawTrendlinesNewark() {
  const numbers = [
    198, 145, 181, 
    77, 161, 220,
    175, 151, 119,
    120, 89, 182,
    145, 173
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 282100)
  getChart('Newark', numbers, averages[0], averages[1], 'chart_newark')
}

function drawTrendlinesChicago() {
  const numbers = [
    685, 685, 539,
    539, 573, 881,
    808, 808, 894,
    496, 497, 698,
    698, 676
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 2706000)
  getChart('Chicago', numbers, averages[0], averages[1], 'chart_chicago')
}

function drawTrendlinesDane() {
  const numbers = [
    88, 79, 78,
    77, 40, 55,
    137, 108, 96,
    96, 51, 46,
    97, 96
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 546700)
  getChart('Dane County', numbers, averages[0], averages[1], 'chart_dane')
}

function drawTrendlinesPhilly() {
  const numbers = [
    400, 400, 400,
    401, 910, 871,
    589, 687, 523,
    523, 523, 721,
    721, 843
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 1584000)
  getChart('Philadelphia', numbers, averages[0], averages[1], 'chart_philly')
}

function drawTrendlinesLA() {
  const numbers = [
    299, 300, 177,
    178, 247, 278,
    383, 294, 300,
    220, 220, 211,
    212, 495
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 3990000)
  getChart('Los Angeles', numbers, averages[0], averages[1], 'chart_la')
}


function getAvg(numbers, averages, totalPop) {
  let summation = 0
  for (var i = 0; i < numbers.length; i++) {
    summation += numbers[i]
  }
  averages[0] = Math.round(summation / numbers.length)
  averages[1] = ((averages[0] / totalPop) * 100).toFixed(3)
}

function getChart(city, numbers, avgNum, avgPercentage, chartName, dates = [
    new Date('Apr 02, 2021'), new Date('Apr 03, 2021'), new Date('Apr 04, 2021'),
    new Date('Apr 05, 2021'), new Date('Apr 06, 2021'), new Date('Apr 07, 2021'),
    new Date('Apr 08, 2021'), new Date('Apr 09, 2021'), new Date('Apr 10, 2021'),
    new Date('Apr 11, 2021'), new Date('Apr 12, 2021'), new Date('Apr 13, 2021'),
    new Date('Apr 14, 2021'), new Date('Apr 15, 2021')
  ]) {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Daily Positive People');

    data.addRows([
      [dates[0], numbers[0]],
      [dates[1], numbers[1]],
      [dates[2], numbers[2]],
      [dates[3], numbers[3]],
      [dates[4], numbers[4]],
      [dates[5], numbers[5]],
      [dates[6], numbers[6]],
      [dates[7], numbers[7]],
      [dates[8], numbers[8]],
      [dates[9], numbers[9]],
      [dates[10], numbers[10]],
      [dates[11], numbers[11]],
      [dates[12], numbers[12]],
      [dates[13], numbers[13]],
      [dates[14], numbers[14]]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, {
      calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation'
    }]);

    const title = city + ' Daily Positive (' + avgNum + ', ' + avgPercentage + '%)'

    var options = {
      title: title,
      legend: 'none',
      hAxis: {
        title: 'Date'
      },
      vAxis: {
        title: 'Number of People'
      },
      colors: ['#AB0D06'],
      trendlines: {
        0: {
          type: 'linear',
          color: '#111',
          opacity: .3
        }
      },
      chartArea: {
        left: 100,
        top: 100,
        width: "68%",
        height: "65%"
      }
    };

    var chart = new google.visualization.LineChart(document.getElementById(chartName));
    chart.draw(view, options);
  }
