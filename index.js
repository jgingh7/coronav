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
    4608,
    4608, 3982, 3013,
    4964, 4774, 5229,
    4533, 3375, 3069,
    2570, 2084, 2463,
    4394
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 8399000)
  getChart('NYC', numbers, averages[0], averages[1], 'chart_newyork')
}

function drawTrendlinesNewark() {
  const numbers = [
    285,
    145, 111, 200,
    168, 360, 186,
    185, 121, 118,
    50, 65, 114,
    141
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 282100)
  getChart('Newark', numbers, averages[0], averages[1], 'chart_newark')
}

function drawTrendlinesChicago() {
  const numbers = [
    522,
    523, 515, 611,
    676, 562, 525,
    356, 529, 292,
    543, 520, 494,
    373
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 2706000)
  getChart('Chicago', numbers, averages[0], averages[1], 'chart_chicago')
}

function drawTrendlinesDane() {
  const numbers = [
    113,
    101, 68, 41,
    201, 121, 136,
    101, 72, 62,
    82, 219, 111,
    104
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 546700)
  getChart('Dane County', numbers, averages[0], averages[1], 'chart_dane')
}

function drawTrendlinesPhilly() {
  const numbers = [
    348,
    349, 686, 359,
    538, 471, 347,
    347, 347, 521,
    305, 313, 339
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 1584000)
  getChart('Philadelphia', numbers, averages[0], averages[1], 'chart_philly')
}

function drawTrendlinesLA() {
  const numbers = [
    3002,
    3002, 2278, 2768,
    2595, 2582, 2699,
    2446, 1696, 1691,
    1692, 2057, 1636,
    1904
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
    new Date('Jan 24, 2021'),
    new Date('Jan 25, 2021'), new Date('Jan 26, 2021'), new Date('Jan 27, 2021'),
    new Date('Jan 28, 2021'), new Date('Jan 29, 2021'), new Date('Jan 30, 2021'),
    new Date('Jan 31, 2021'), new Date('Feb 01, 2021'), new Date('Feb 02, 2021'),
    new Date('Feb 03, 2021'), new Date('Feb 04, 2021'), new Date('Feb 05, 2021'),
    new Date('Feb 06, 2021')
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
